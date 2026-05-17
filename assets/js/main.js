/* =========================================================
   INTERACCIONES GENERALES, RENDER DE SECCIONES Y FORMULARIOS
   FIX V14: ficha expandida con cierre natural.
   - Click sobre la ficha abierta la minimiza.
   - La apertura/cierre se siente más fluida.
   - En móvil/tablet no se expande: Ver detalle abre modal.
========================================================= */
let showcaseState = {
  activeBodega: 'Todos',
  activeTipo: 'Todos',
  search: '',
  activeId: null,
  filtered: [],
  timer: null,
  resumeTimer: null,
  activeLocked: false,
  transitioningUntil: 0
};

function observeReveals(){
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if(!('IntersectionObserver' in window)) { els.forEach(el=>el.classList.add('visible')); return; }
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, {threshold:.13});
  els.forEach(el=>observer.observe(el));
}

function normalizeText(value){
  return String(value || '')
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function uniqueValues(items, key){
  return [...new Set(items.map(item => item[key]).filter(Boolean))];
}

function stopShowcaseAutoplay(){
  if(showcaseState.timer){
    clearInterval(showcaseState.timer);
    showcaseState.timer = null;
  }
}

function getShowcaseViewport(){
  return document.getElementById('showcaseViewport');
}

function isShowcaseCompactView(){
  return window.matchMedia('(max-width: 1199.98px)').matches;
}

function getShowcaseStep(){
  const viewport = getShowcaseViewport();
  const firstCard = document.querySelector('#showcaseTrack .wine-strip-card');
  const track = document.getElementById('showcaseTrack');
  if(!viewport || !firstCard) return 320;
  const styles = track ? getComputedStyle(track) : null;
  const gap = styles ? parseFloat(styles.columnGap || styles.gap || '0') || 0 : 0;
  return Math.max(1, Math.round(firstCard.getBoundingClientRect().width + gap));
}

function scrollShowcase(direction = 1){
  const viewport = getShowcaseViewport();
  if(!viewport) return;
  const step = getShowcaseStep();
  const maxLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
  const target = Math.max(0, Math.min(maxLeft, viewport.scrollLeft + (step * direction)));
  viewport.scrollTo({ left: target, behavior: 'smooth' });
}

function keepExpandedCardInView(card){
  const viewport = getShowcaseViewport();
  if(!viewport || !card) return;

  const run = (behavior = 'smooth') => {
    const leftPadding = 6;
    const maxLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const target = Math.max(0, Math.min(maxLeft, card.offsetLeft - leftPadding));
    viewport.scrollTo({ left: target, behavior });
  };

  // Se ejecuta varias veces porque la card cambia de ancho con transición.
  // Así evitamos que la ficha se corte cuando el vino está cerca del borde derecho.
  requestAnimationFrame(() => run('smooth'));
  setTimeout(() => run('smooth'), 120);
  setTimeout(() => run('smooth'), 420);
  setTimeout(() => run('smooth'), 760);
}

function updateShowcaseCounter(){
  const current = document.querySelector('[data-showcase-current]');
  const total = document.querySelector('[data-showcase-total]');
  const count = document.querySelector('[data-showcase-count]');
  const totalItems = showcaseState.filtered.length || 0;
  const activeIndex = Math.max(0, showcaseState.filtered.findIndex(p => p.id === showcaseState.activeId));

  if(current) current.textContent = totalItems ? String(activeIndex + 1).padStart(2, '0') : '00';
  if(total) total.textContent = String(totalItems).padStart(2, '0');
  if(count) count.textContent = `${totalItems} etiquetas`;

  document.querySelectorAll('[data-showcase-prev], [data-showcase-next]').forEach(btn=>{
    btn.disabled = totalItems <= 1;
  });
}

function hasShowcaseExpanded(){
  return Boolean(showcaseState.activeId) && !isShowcaseCompactView();
}

function updateShowcaseStatus(){
  const status = document.querySelector('[data-showcase-status]');
  if(!status) return;
  if(isShowcaseCompactView()) {
    status.textContent = 'Modo móvil/tablet · usa Ver detalle para ampliar la ficha';
    return;
  }
  status.textContent = hasShowcaseExpanded()
    ? 'Ficha abierta · click sobre la ficha para minimizar'
    : 'Avance automático en modo simple · usa las flechas laterales';
}

function startShowcaseAutoplay(){
  stopShowcaseAutoplay();
  if(hasShowcaseExpanded()) { updateShowcaseStatus(); return; }
  if((showcaseState.filtered.length || 0) <= 3) { updateShowcaseStatus(); return; }
  showcaseState.timer = setInterval(()=>{
    if(hasShowcaseExpanded()) { stopShowcaseAutoplay(); return; }
    const viewport = getShowcaseViewport();
    if(!viewport) return;
    const nearEnd = viewport.scrollLeft + viewport.clientWidth >= viewport.scrollWidth - 40;
    if(nearEnd) viewport.scrollTo({left:0, behavior:'smooth'});
    else scrollShowcase(1);
  }, 5600);
  updateShowcaseStatus();
}

function scheduleShowcaseAutoplay(delay = 900){
  clearTimeout(showcaseState.resumeTimer);
  showcaseState.resumeTimer = setTimeout(()=>{
    if(!hasShowcaseExpanded()) startShowcaseAutoplay();
  }, delay);
}

function moveShowcase(direction){
  clearShowcaseActive(false);
  scrollShowcase(direction);
  scheduleShowcaseAutoplay(1200);
}

function renderShowcaseFilters(products){
  const filters = document.getElementById('showcaseFilters');
  if(!filters) return;

  const bodegas = uniqueValues(products, 'bodega');
  const tipos = uniqueValues(products, 'categoria');

  filters.innerHTML = `
    <div class="showcase-search-row">
      <label class="showcase-filter-label" for="showcaseSearch">Buscar</label>
      <div class="showcase-search-control">
        <i class="bi bi-search"></i>
        <input id="showcaseSearch" type="search" placeholder="Nombre, cepa, bodega, región o maridaje..." autocomplete="off">
      </div>
    </div>
    <div class="showcase-filter-block">
      <div class="showcase-filter-label">Bodega</div>
      <div class="showcase-chip-row" data-showcase-filter-group="bodega">
        <button class="showcase-chip active" type="button" data-showcase-bodega="Todos">Todas</button>
        ${bodegas.map(bodega => `<button class="showcase-chip" type="button" data-showcase-bodega="${bodega}">${bodega}</button>`).join('')}
      </div>
    </div>
    <div class="showcase-filter-block">
      <div class="showcase-filter-label">Tipo</div>
      <div class="showcase-chip-row" data-showcase-filter-group="tipo">
        <button class="showcase-chip active" type="button" data-showcase-tipo="Todos">Todos</button>
        ${tipos.map(tipo => `<button class="showcase-chip" type="button" data-showcase-tipo="${tipo}">${tipo}</button>`).join('')}
      </div>
    </div>
  `;

  filters.querySelector('#showcaseSearch')?.addEventListener('input', event=>{
    showcaseState.search = event.target.value || '';
    renderShowcaseProducts();
  });

  filters.querySelectorAll('[data-showcase-bodega]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      showcaseState.activeBodega = btn.dataset.showcaseBodega || 'Todos';
      filters.querySelectorAll('[data-showcase-bodega]').forEach(item => item.classList.toggle('active', item === btn));
      renderShowcaseProducts();
    });
  });

  filters.querySelectorAll('[data-showcase-tipo]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      showcaseState.activeTipo = btn.dataset.showcaseTipo || 'Todos';
      filters.querySelectorAll('[data-showcase-tipo]').forEach(item => item.classList.toggle('active', item === btn));
      renderShowcaseProducts();
    });
  });
}

function getShowcaseProducts(){
  const needle = normalizeText(showcaseState.search);
  return (window.PRODUCTS || []).filter(item=>{
    const matchesBodega = showcaseState.activeBodega === 'Todos' || item.bodega === showcaseState.activeBodega;
    const matchesTipo = showcaseState.activeTipo === 'Todos' || item.categoria === showcaseState.activeTipo;
    const searchable = normalizeText(`${item.nombre} ${item.cepa} ${item.bodega} ${item.region} ${item.maridaje} ${item.categoria} ${item.linea} ${item.pais}`);
    const matchesSearch = !needle || searchable.includes(needle);
    return matchesBodega && matchesTipo && matchesSearch;
  });
}

function showcaseWineCard(item, isActive = false){
  const category = item.categoria || item.etiqueta || 'Vino';
  const description = typeof shortText === 'function' ? shortText(item.descripcion, 118) : (item.descripcion || 'Consultar');
  const price = typeof money === 'function' ? money(item.precio) : (item.precio || 'Consultar');
  return `
    <article class="wine-strip-card ${isActive ? 'is-expanded' : ''}" tabindex="0" data-showcase-card="${item.id}" aria-label="${item.nombre}">
      <div class="wine-strip-visual">
        <span class="wine-strip-badge">${category}</span>
        <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${CONFIG.placeholderImage}'">
      </div>
      <div class="wine-strip-summary">
        <span>${item.bodega || 'Maison Wine'} · ${item.pais || 'Consultar'}</span>
        <h3>${item.nombre}</h3>
        <p>${item.linea || item.cepa || 'Colección seleccionada'}</p>
        <div class="wine-strip-card-actions">
          <button class="btn btn-outline-maison btn-sm" type="button" data-detail="${item.id}"><i class="bi bi-eye"></i> Ver detalle</button>
          <button class="btn btn-wine btn-sm" type="button" data-add-cart="${item.id}"><i class="bi bi-bag-plus"></i> Añadir</button>
        </div>
      </div>
      <div class="wine-strip-expanded" aria-hidden="${isActive ? 'false' : 'true'}">
        <div class="wine-expanded-kicker">${item.bodega || 'Maison Wine'} · ${item.pais || 'Consultar'}</div>
        <h3>${item.nombre}</h3>
        <strong>${item.linea || item.categoria || 'Colección'}</strong>
        <p>${description}</p>
        <div class="wine-mini-specs">
          <span><i class="bi bi-droplet"></i><b>Cepa</b>${item.cepa || 'Consultar'}</span>
          <span><i class="bi bi-geo-alt"></i><b>Región</b>${item.region || 'Consultar'}</span>
          <span><i class="bi bi-thermometer-snow"></i><b>Servicio</b>${item.temperatura || 'Consultar'}</span>
          <span><i class="bi bi-percent"></i><b>Alcohol</b>${item.alcohol || 'Consultar'}</span>
        </div>
        <div class="wine-expanded-bottom">
          <div class="price">${price}</div>
          <div class="wine-expanded-actions">
            <button class="btn btn-outline-maison btn-sm" type="button" data-detail="${item.id}"><i class="bi bi-eye"></i> Ver detalle</button>
            <button class="btn btn-wine btn-sm" type="button" data-add-cart="${item.id}"><i class="bi bi-bag-plus"></i> Añadir</button>
          </div>
        </div>
      </div>
    </article>`;
}

function setShowcaseActive(id, shouldScroll = false, lockOpen = false){
  if(!id) return;
  if(isShowcaseCompactView()){
    clearShowcaseActive(false);
    updateShowcaseStatus();
    return;
  }

  const root = document.getElementById('catalogShowcase');
  const track = document.getElementById('showcaseTrack');
  if(!track) return;

  const alreadyActive = showcaseState.activeId === id && root?.classList.contains('has-expanded');
  if(alreadyActive){
    if(lockOpen) showcaseState.activeLocked = true;
    if(shouldScroll){
      const activeCard = track.querySelector(`[data-showcase-card="${CSS.escape(id)}"]`);
      keepExpandedCardInView(activeCard);
    }
    updateShowcaseStatus();
    return;
  }

  stopShowcaseAutoplay();
  clearTimeout(showcaseState.resumeTimer);
  showcaseState.activeId = id;
  showcaseState.activeLocked = Boolean(lockOpen);
  showcaseState.transitioningUntil = Date.now() + 620;

  root?.classList.add('has-expanded');

  track.querySelectorAll('[data-showcase-card]').forEach(card=>{
    const active = card.dataset.showcaseCard === id;
    card.classList.toggle('is-expanded', active);
    const panel = card.querySelector('.wine-strip-expanded');
    if(panel) panel.setAttribute('aria-hidden', active ? 'false' : 'true');
  });

  updateShowcaseCounter();
  updateShowcaseStatus();

  if(shouldScroll){
    const activeCard = track.querySelector(`[data-showcase-card="${CSS.escape(id)}"]`);
    keepExpandedCardInView(activeCard);
  }
}

function clearShowcaseActive(shouldRestart = true){
  const root = document.getElementById('catalogShowcase');
  const track = document.getElementById('showcaseTrack');
  const viewport = getShowcaseViewport();
  const activeId = showcaseState.activeId;
  const activeCard = activeId && track ? track.querySelector(`[data-showcase-card="${CSS.escape(activeId)}"]`) : null;

  // Marcamos estado de cierre para que CSS use una transición más suave.
  root?.classList.add('is-collapsing');
  showcaseState.activeId = null;
  showcaseState.activeLocked = false;
  showcaseState.transitioningUntil = Date.now() + 620;
  root?.classList.remove('has-expanded');

  if(track){
    track.querySelectorAll('[data-showcase-card]').forEach(card=>{
      card.classList.remove('is-expanded');
      const panel = card.querySelector('.wine-strip-expanded');
      if(panel) panel.setAttribute('aria-hidden', 'true');
    });
  }

  // Mantiene el regreso visual estable: la card se reduce en su carril, sin salto seco.
  if(viewport && activeCard){
    const maxLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    const target = Math.max(0, Math.min(maxLeft, activeCard.offsetLeft - 8));
    requestAnimationFrame(()=> viewport.scrollTo({ left: target, behavior: 'smooth' }));
  }

  clearTimeout(root?._collapseTimer);
  if(root){
    root._collapseTimer = setTimeout(()=> root.classList.remove('is-collapsing'), 680);
  }

  updateShowcaseCounter();
  updateShowcaseStatus();
  if(shouldRestart) scheduleShowcaseAutoplay(900);
}

function renderShowcaseProducts(){
  const track = document.getElementById('showcaseTrack');
  const empty = document.getElementById('showcaseEmpty');
  if(!track) return;

  showcaseState.filtered = getShowcaseProducts();
  if(isShowcaseCompactView()) showcaseState.activeId = null;

  if(!showcaseState.filtered.length){
    showcaseState.activeId = null;
    showcaseState.activeLocked = false;
    showcaseState.transitioningUntil = 0;
    track.innerHTML = '';
    if(empty) empty.hidden = false;
    updateShowcaseCounter();
    updateShowcaseStatus();
    stopShowcaseAutoplay();
    return;
  }

  if(empty) empty.hidden = true;
  if(!showcaseState.filtered.some(p => p.id === showcaseState.activeId)){
    showcaseState.activeId = null;
    showcaseState.activeLocked = false;
    showcaseState.transitioningUntil = 0;
  }

  track.innerHTML = showcaseState.filtered.map((p)=> showcaseWineCard(p, p.id === showcaseState.activeId)).join('');
  const viewport = getShowcaseViewport();
  if(viewport && !showcaseState.activeId) viewport.scrollTo({ left: 0, behavior: 'auto' });

  if(typeof observeReveals === 'function') observeReveals();
  updateShowcaseCounter();
  startShowcaseAutoplay();
}

function bindShowcaseCarousel(){
  const root = document.getElementById('catalogShowcase');
  if(!root || root.dataset.bound === 'true') return;
  root.dataset.bound = 'true';

  root.querySelector('[data-showcase-prev]')?.addEventListener('click', ()=> moveShowcase(-1));
  root.querySelector('[data-showcase-next]')?.addEventListener('click', ()=> moveShowcase(1));

  root.addEventListener('mouseenter', stopShowcaseAutoplay);
  root.addEventListener('mouseleave', ()=> {
    // No cerramos la ficha al mover el mouse: se mantiene estable hasta elegir otro vino, usar flechas, filtros o ESC.
    if(!showcaseState.activeLocked) updateShowcaseStatus();
  });
  root.addEventListener('focusin', stopShowcaseAutoplay);
  root.addEventListener('focusout', ()=> scheduleShowcaseAutoplay(900));

  root.addEventListener('mouseover', event=>{
    if(isShowcaseCompactView()) return;
    const card = event.target.closest?.('[data-showcase-card]');
    if(card && !card.contains(event.relatedTarget)){
      // Si el usuario fijó una ficha con click, no cambiamos por hover accidental.
      if(showcaseState.activeLocked && showcaseState.activeId && showcaseState.activeId !== card.dataset.showcaseCard) return;
      const changingTooSoon = showcaseState.activeId && showcaseState.activeId !== card.dataset.showcaseCard && Date.now() < showcaseState.transitioningUntil;
      if(changingTooSoon) return;
      setShowcaseActive(card.dataset.showcaseCard, true, false);
    }
  });

  root.addEventListener('focusin', event=>{
    if(isShowcaseCompactView()) return;
    const card = event.target.closest?.('[data-showcase-card]');
    if(card) setShowcaseActive(card.dataset.showcaseCard, true, false);
  });

  root.addEventListener('click', event=>{
    if(event.target.closest?.('[data-detail], [data-add-cart], button, a')) return;
    if(isShowcaseCompactView()) return;
    const card = event.target.closest?.('[data-showcase-card]');
    if(card){
      const isOpenCard = root.classList.contains('has-expanded') && showcaseState.activeId === card.dataset.showcaseCard;
      if(isOpenCard){
        // Click en cualquier zona de la ficha abierta = minimizar suave.
        clearShowcaseActive(true);
        return;
      }
      // Click fija la ficha abierta. No se cierra con un movimiento accidental del mouse.
      setShowcaseActive(card.dataset.showcaseCard, true, true);
    }
  });

  document.addEventListener('keydown', event=>{
    if(event.key === 'Escape' && root.classList.contains('has-expanded')) clearShowcaseActive(true);
  });

  const viewport = getShowcaseViewport();
  if(viewport){
    viewport.addEventListener('scroll', ()=>{
      stopShowcaseAutoplay();
      clearTimeout(viewport._scrollTimer);
      viewport._scrollTimer = setTimeout(()=>{
        if(!hasShowcaseExpanded()) startShowcaseAutoplay();
      }, 1300);
    }, {passive:true});
  }

  window.addEventListener('resize', ()=>{
    if(isShowcaseCompactView()) clearShowcaseActive(false);
    updateShowcaseStatus();
  }, {passive:true});
}

function renderFeatured(){
  const root = document.getElementById('catalogShowcase');
  if(!root) return;

  const products = window.PRODUCTS || [];
  if(!products.length) return;

  renderShowcaseFilters(products);
  bindShowcaseCarousel();
  renderShowcaseProducts();
}

function getBodegaCatalogTarget(bodega){
  if(!bodega || !bodega.nombre) return 'Todos';
  return bodega.nombre;
}

function renderBodegas(){
  const grid = document.getElementById('bodegaGrid');
  if(!grid) return;

  grid.innerHTML = (window.BODEGAS || []).map(b=>{
    const target = getBodegaCatalogTarget(b);
    const href = target === 'Todos'
      ? 'catalogo.html'
      : `catalogo.html?bodega=${encodeURIComponent(target)}`;
    const label = target === 'Todos' ? 'Ver selección' : 'Ver vinos';

    return `<div class="col-md-6 col-xl-4"><article class="bodega-card reveal">
      <div class="card-icon"><i class="bi ${b.icon || 'bi-shop'}"></i></div>
      <div class="meta mb-2">${b.pais}</div>
      <h3>${b.nombre}</h3>
      <p class="section-text small">${b.descripcion}</p>
      <a href="${href}" class="btn btn-outline-maison btn-sm">${label}</a>
    </article></div>`;
  }).join('');
}

function ensurePackDetailModal(){
  if(document.getElementById('packDetailModal')) return;

  const modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = 'packDetailModal';
  modal.tabIndex = -1;
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 rounded-4 overflow-hidden">
        <div class="modal-header bg-dark-maison text-white border-0">
          <div>
            <div class="text-uppercase small text-white-50">Contenido del pack</div>
            <h5 class="modal-title font-title fs-2 mb-0" id="packDetailModalTitle">Detalle del pack</h5>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body p-4 p-lg-5" id="packDetailModalBody"></div>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function showPackDetail(id){
  const item = (window.PACKS || []).find(p => p.id === id);
  if(!item) return;

  ensurePackDetailModal();

  const title = document.getElementById('packDetailModalTitle');
  const body = document.getElementById('packDetailModalBody');
  if(title) title.textContent = item.nombre;

  const contentList = Array.isArray(item.contenido) && item.contenido.length
    ? item.contenido
    : [
        'Selección de vino tinto.',
        'Selección de vino blanco o rosado.',
        'Etiqueta recomendada según disponibilidad.'
      ];

  body.innerHTML = `
    <div class="row g-4 align-items-center">
      <div class="col-lg-4">
        <div class="product-detail-img">
          <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${CONFIG.placeholderImage}'">
        </div>
      </div>
      <div class="col-lg-8">
        <span class="product-badge position-static d-inline-block mb-3">${item.etiqueta || 'Pack'}</span>
        <h3 class="font-title display-6 mb-2">${item.nombre}</h3>
        <p class="section-text mb-3">${item.descripcion || 'Selección comercial de vinos recomendados.'}</p>
        <div class="paper-card p-3 p-lg-4">
          <strong class="d-block mb-3"><i class="bi bi-box-seam text-gold me-2"></i>Este pack incluye:</strong>
          <ul class="mb-0 ps-3">
            ${contentList.map(line => `<li class="mb-2">${line}</li>`).join('')}
          </ul>
        </div>
        <div class="d-flex flex-column flex-sm-row gap-2 mt-4">
          <button class="btn btn-maison" type="button" data-add-cart="${item.id}"><i class="bi bi-bag-plus"></i> Añadir pack</button>
          <button class="btn btn-outline-maison" type="button" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>`;

  const modalEl = document.getElementById('packDetailModal');
  if(window.bootstrap?.Modal && modalEl){
    window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
  } else if(modalEl){
    modalEl.classList.add('show');
    modalEl.style.display = 'block';
  }
}

function renderPacks(){
  const grid = document.getElementById('packGrid');
  if(!grid) return;

  ensurePackDetailModal();

  grid.innerHTML = (window.PACKS || []).map(p=>`<div class="col-lg-6"><article class="pack-card reveal">
    <div class="row g-3 align-items-center">
      <div class="col-4"><img class="rounded-4" src="${p.imagen}" alt="${p.nombre}" onerror="this.src='${CONFIG.placeholderImage}'"></div>
      <div class="col-8">
        <span class="product-badge position-static d-inline-block mb-2">${p.etiqueta || 'Pack'}</span>
        <h3>${p.nombre}</h3>
        <p class="section-text small mb-2">${p.descripcion}</p>
        <div class="fw-black text-wine mb-3">${money(p.precio)}</div>
        <div class="d-flex flex-column flex-sm-row gap-2">
          <button class="btn btn-outline-maison btn-sm" type="button" data-pack-detail="${p.id}"><i class="bi bi-eye"></i> Ver detalle</button>
          <button class="btn btn-maison btn-sm" type="button" data-add-cart="${p.id}"><i class="bi bi-bag-plus"></i> Añadir pack</button>
        </div>
      </div>
    </div>
  </article></div>`).join('');
}

document.addEventListener('click', event=>{
  const detailBtn = event.target.closest?.('[data-pack-detail]');
  if(!detailBtn) return;
  event.preventDefault();
  showPackDetail(detailBtn.dataset.packDetail);
});

function initForms(){
  document.querySelectorAll('[data-whatsapp-form]').forEach(form=>{
    if(form.dataset.bound === 'true') return;
    form.dataset.bound = 'true';
    form.addEventListener('submit', e=>{
      e.preventDefault();
      if(!form.checkValidity()){ form.classList.add('was-validated'); return; }
      const data = new FormData(form);
      const title = form.dataset.whatsappTitle || 'Consulta desde la web';
      const lines = [`Hola, tengo una consulta desde ${CONFIG.brandName}.`, '', title.toUpperCase() + ':'];
      for(const [key,value] of data.entries()){
        if(value) lines.push(`${key}: ${value}`);
      }
      const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
      window.open(url, '_blank', 'noopener');
    });
  });

  document.querySelectorAll('[data-mail-form]').forEach(btn=>{
    if(btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';
    btn.addEventListener('click',()=>{
      const form = btn.closest('form');
      if(!form) return;
      if(!form.checkValidity()){ form.classList.add('was-validated'); return; }
      const data = new FormData(form);
      const lines = [`Consulta desde ${CONFIG.brandName}`, ''];
      for(const [key,value] of data.entries()) if(value) lines.push(`${key}: ${value}`);
      location.href = `mailto:${CONFIG.orderEmail}?subject=${encodeURIComponent('Consulta web - ' + CONFIG.brandName)}&body=${encodeURIComponent(lines.join('\n'))}`;
    });
  });
}

function initMain(){
  document.querySelectorAll('.js-brand-name').forEach(el=>el.textContent = CONFIG.brandName);
  document.querySelectorAll('.js-whatsapp-number-text').forEach(el=>el.textContent = CONFIG.whatsappDisplay);
  renderFeatured();
  renderBodegas();
  renderPacks();
  initForms();
  observeReveals();
}

window.addEventListener('layout:ready', initMain);
document.addEventListener('DOMContentLoaded', () => setTimeout(initMain, 450));
if(document.readyState !== 'loading') setTimeout(initMain, 450);

window.addEventListener('resize', ()=>{
  clearTimeout(window.__showcaseResizeTimer);
  window.__showcaseResizeTimer = setTimeout(()=>{
    updateShowcaseCarousel(false);
    startShowcaseAutoplay();
  }, 180);
});

/* =========================================================
   FIX V16 - Carrusel Coverflow estilo tarjeta con overlay
   - Las fichas ya no se expanden en horizontal.
   - Se muestra la botella/foto como protagonista.
   - Al hover/click sube una capa con info y botones.
   - Mantiene filtros, buscador, Ver detalle y Añadir al carrito.
========================================================= */
function getShowcaseActiveIndex(){
  const total = showcaseState.filtered.length || 0;
  if(!total) return 0;
  if(typeof showcaseState.activeIndex !== 'number') showcaseState.activeIndex = 0;
  showcaseState.activeIndex = Math.max(0, Math.min(total - 1, showcaseState.activeIndex));
  return showcaseState.activeIndex;
}

function setShowcaseActiveIndex(index, open = false){
  const total = showcaseState.filtered.length || 0;
  if(!total) return;
  showcaseState.activeIndex = ((index % total) + total) % total;
  const item = showcaseState.filtered[showcaseState.activeIndex];
  showcaseState.activeId = item?.id || null;
  positionCoverflowCards();
  if(open){
    const card = document.querySelector(`#showcaseTrack [data-showcase-card="${CSS.escape(showcaseState.activeId)}"]`);
    document.querySelectorAll('#showcaseTrack .wine-cover-card').forEach(c => c.classList.remove('is-open'));
    card?.classList.add('is-open');
  }
  updateShowcaseCounter();
  updateShowcaseStatus();
}

function getCoverflowOffset(index, activeIndex, total){
  let diff = index - activeIndex;
  if(total > 2){
    const half = total / 2;
    if(diff > half) diff -= total;
    if(diff < -half) diff += total;
  }
  return diff;
}

function positionCoverflowCards(){
  const track = document.getElementById('showcaseTrack');
  const viewport = getShowcaseViewport();
  if(!track) return;

  const cards = [...track.querySelectorAll('.wine-cover-card')];
  const total = cards.length;
  const activeIndex = getShowcaseActiveIndex();
  const width = viewport?.clientWidth || track.clientWidth || window.innerWidth;
  const isMobile = width < 640;
  const oneStep = isMobile ? Math.min(150, width * .36) : Math.min(190, Math.max(138, width * .20));
  const twoStep = isMobile ? oneStep * 1.38 : oneStep * 1.72;

  cards.forEach((card, index)=>{
    const diff = getCoverflowOffset(index, activeIndex, total);
    const abs = Math.abs(diff);
    const direction = diff < 0 ? -1 : 1;

    card.classList.remove('is-active', 'is-left', 'is-right', 'is-hidden');
    card.style.pointerEvents = 'auto';

    if(diff === 0){
      card.classList.add('is-active');
      card.style.zIndex = 8;
      card.style.opacity = '1';
      card.style.filter = 'none';
      card.style.transform = 'translate(-50%, -50%) translateX(0) translateZ(95px) scale(1.08)';
      return;
    }

    if(abs === 1){
      card.classList.add(diff < 0 ? 'is-left' : 'is-right');
      card.style.zIndex = 5;
      card.style.opacity = isMobile ? '.56' : '.82';
      card.style.filter = 'saturate(.82) brightness(.84)';
      card.style.transform = `translate(-50%, -50%) translateX(${direction * oneStep}px) rotateY(${direction * -28}deg) scale(${isMobile ? .78 : .86})`;
      return;
    }

    if(abs === 2 && !isMobile){
      card.classList.add(diff < 0 ? 'is-left' : 'is-right');
      card.style.zIndex = 2;
      card.style.opacity = '.18';
      card.style.filter = 'saturate(.65) brightness(.68) blur(.2px)';
      card.style.transform = `translate(-50%, -50%) translateX(${direction * twoStep}px) rotateY(${direction * -38}deg) scale(.72)`;
      return;
    }

    card.classList.add('is-hidden');
    card.style.zIndex = 0;
    card.style.opacity = '0';
    card.style.pointerEvents = 'none';
    card.style.filter = 'blur(2px)';
    card.style.transform = `translate(-50%, -50%) translateX(${direction * (twoStep + 120)}px) scale(.62)`;
  });
}

function showcaseWineCard(item, isActive = false){
  const category = item.categoria || item.etiqueta || 'Vino';
  const description = typeof shortText === 'function' ? shortText(item.descripcion, 108) : (item.descripcion || 'Consultar');
  const cepa = typeof shortText === 'function' ? shortText(item.cepa || 'Consultar', 42) : (item.cepa || 'Consultar');
  const region = typeof shortText === 'function' ? shortText(item.region || 'Consultar', 34) : (item.region || 'Consultar');
  const price = typeof money === 'function' ? money(item.precio) : (item.precio || 'Consultar');
  return `
    <article class="wine-cover-card ${isActive ? 'is-active' : ''}" tabindex="0" data-showcase-card="${item.id}" aria-label="${item.nombre}">
      <div class="wine-cover-media">
        <span class="wine-cover-badge">${category}</span>
        <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${CONFIG.placeholderImage}'">
        <span class="wine-cover-glow"></span>
      </div>
      <div class="wine-cover-info">
        <div class="wine-cover-kicker">${item.bodega || 'Maison Wine'} · ${item.pais || 'Consultar'}</div>
        <h3>${item.nombre}</h3>
        <strong>${item.linea || item.categoria || 'Colección'}</strong>
        <p>${description}</p>
        <div class="wine-cover-meta">
          <span><i class="bi bi-droplet"></i>${cepa}</span>
          <span><i class="bi bi-geo-alt"></i>${region}</span>
          <span><i class="bi bi-thermometer-snow"></i>${item.temperatura || 'Consultar'}</span>
          <span><i class="bi bi-percent"></i>${item.alcohol || 'Consultar'}</span>
        </div>
        <div class="wine-cover-bottom">
          <div class="wine-cover-price">${price}</div>
          <div class="wine-cover-actions">
            <button class="btn btn-outline-light btn-sm" type="button" data-detail="${item.id}"><i class="bi bi-eye"></i> Ver detalle</button>
            <button class="btn btn-wine btn-sm" type="button" data-add-cart="${item.id}"><i class="bi bi-bag-plus"></i> Añadir</button>
          </div>
        </div>
      </div>
    </article>`;
}

function updateShowcaseCounter(){
  const current = document.querySelector('[data-showcase-current]');
  const total = document.querySelector('[data-showcase-total]');
  const count = document.querySelector('[data-showcase-count]');
  const totalItems = showcaseState.filtered.length || 0;
  const activeIndex = getShowcaseActiveIndex();

  if(current) current.textContent = totalItems ? String(activeIndex + 1).padStart(2, '0') : '00';
  if(total) total.textContent = String(totalItems).padStart(2, '0');
  if(count) count.textContent = `${totalItems} etiquetas`;

  document.querySelectorAll('[data-showcase-prev], [data-showcase-next]').forEach(btn=>{
    btn.disabled = totalItems <= 1;
  });
}

function hasShowcaseExpanded(){
  return Boolean(document.querySelector('#showcaseTrack .wine-cover-card.is-open'));
}

function updateShowcaseStatus(){
  const status = document.querySelector('[data-showcase-status]');
  if(!status) return;
  status.textContent = hasShowcaseExpanded()
    ? 'Descripción abierta · haz clic en la botella para ocultarla'
    : 'Avance automático · pasa el mouse o toca una botella para ver información';
}

function startShowcaseAutoplay(){
  stopShowcaseAutoplay();
  if((showcaseState.filtered.length || 0) <= 1) { updateShowcaseStatus(); return; }
  showcaseState.timer = setInterval(()=>{
    if(hasShowcaseExpanded()) return;
    moveShowcase(1, true);
  }, 4300);
  updateShowcaseStatus();
}

function scheduleShowcaseAutoplay(delay = 900){
  clearTimeout(showcaseState.resumeTimer);
  showcaseState.resumeTimer = setTimeout(()=>startShowcaseAutoplay(), delay);
}

function moveShowcase(direction, fromAuto = false){
  document.querySelectorAll('#showcaseTrack .wine-cover-card').forEach(c => c.classList.remove('is-open'));
  const total = showcaseState.filtered.length || 0;
  if(!total) return;
  const current = getShowcaseActiveIndex();
  showcaseState.activeIndex = ((current + direction) % total + total) % total;
  showcaseState.activeId = showcaseState.filtered[showcaseState.activeIndex]?.id || null;
  positionCoverflowCards();
  updateShowcaseCounter();
  updateShowcaseStatus();
  if(!fromAuto) scheduleShowcaseAutoplay(1100);
}

function renderShowcaseProducts(){
  const track = document.getElementById('showcaseTrack');
  const empty = document.getElementById('showcaseEmpty');
  if(!track) return;

  stopShowcaseAutoplay();
  showcaseState.filtered = getShowcaseProducts();
  showcaseState.activeIndex = 0;
  showcaseState.activeId = showcaseState.filtered[0]?.id || null;
  showcaseState.activeLocked = false;

  if(!showcaseState.filtered.length){
    track.innerHTML = '';
    if(empty) empty.hidden = false;
    updateShowcaseCounter();
    updateShowcaseStatus();
    return;
  }

  if(empty) empty.hidden = true;
  track.innerHTML = showcaseState.filtered.map((p, index)=> showcaseWineCard(p, index === 0)).join('');
  requestAnimationFrame(()=>{
    positionCoverflowCards();
    updateShowcaseCounter();
    startShowcaseAutoplay();
  });
}

function bindShowcaseCarousel(){
  const root = document.getElementById('catalogShowcase');
  if(!root || root.dataset.bound === 'v16') return;
  root.dataset.bound = 'v16';

  root.querySelector('[data-showcase-prev]')?.addEventListener('click', ()=> moveShowcase(-1));
  root.querySelector('[data-showcase-next]')?.addEventListener('click', ()=> moveShowcase(1));

  root.addEventListener('mouseenter', stopShowcaseAutoplay);
  root.addEventListener('mouseleave', ()=>{
    // V17: la ficha NO se cierra al sacar el mouse.
    // Se mantiene visible hasta que el usuario haga clic de nuevo.
    if(!hasShowcaseExpanded()) scheduleShowcaseAutoplay(900);
    updateShowcaseStatus();
  });
  root.addEventListener('focusin', stopShowcaseAutoplay);
  root.addEventListener('focusout', ()=>scheduleShowcaseAutoplay(900));

  root.addEventListener('mouseover', event=>{
    const card = event.target.closest?.('[data-showcase-card]');
    if(!card || card.contains(event.relatedTarget)) return;
    const cards = [...document.querySelectorAll('#showcaseTrack .wine-cover-card')];
    const index = cards.indexOf(card);
    if(index < 0) return;
    setShowcaseActiveIndex(index, false);
    cards.forEach(other => { if(other !== card) other.classList.remove('is-open'); });
    card.classList.add('is-open');
    stopShowcaseAutoplay();
    updateShowcaseStatus();
  });

  root.addEventListener('focusin', event=>{
    const card = event.target.closest?.('[data-showcase-card]');
    if(!card) return;
    const cards = [...document.querySelectorAll('#showcaseTrack .wine-cover-card')];
    const index = cards.indexOf(card);
    if(index < 0) return;
    setShowcaseActiveIndex(index, false);
    cards.forEach(other => { if(other !== card) other.classList.remove('is-open'); });
    card.classList.add('is-open');
    stopShowcaseAutoplay();
    updateShowcaseStatus();
  });

  root.addEventListener('click', event=>{
    if(event.target.closest?.('[data-detail], [data-add-cart], button, a')) return;
    const card = event.target.closest?.('[data-showcase-card]');
    if(!card) return;
    const cards = [...document.querySelectorAll('#showcaseTrack .wine-cover-card')];
    const index = cards.indexOf(card);
    if(index < 0) return;

    const wasOpen = card.classList.contains('is-open');
    setShowcaseActiveIndex(index, false);
    cards.forEach(other => other.classList.remove('is-open'));

    if(wasOpen){
      scheduleShowcaseAutoplay(1200);
    }else{
      card.classList.add('is-open');
      stopShowcaseAutoplay();
    }
    updateShowcaseStatus();
  });

  document.addEventListener('keydown', event=>{
    if(event.key === 'Escape'){
      document.querySelectorAll('#showcaseTrack .wine-cover-card').forEach(c => c.classList.remove('is-open'));
      updateShowcaseStatus();
      scheduleShowcaseAutoplay(700);
    }
  });

  window.addEventListener('resize', ()=>{
    clearTimeout(window.__coverflowResizeTimer);
    window.__coverflowResizeTimer = setTimeout(positionCoverflowCards, 120);
  }, {passive:true});
}

function updateShowcaseCarousel(){
  positionCoverflowCards();
  updateShowcaseCounter();
  updateShowcaseStatus();
}

/* =========================================================
   FIX V18 - Coverflow controlado + botones funcionales + arrastre con inercia
   - Hover con pausa: no salta como loco al mover el cursor.
   - Click en la misma botella abre/cierra la ficha.
   - Ver detalle y Añadir se gestionan directo para evitar conflicto con el carrusel.
   - Arrastre horizontal con aceleración/desaceleración: empujas el carrusel y suelta natural.
========================================================= */
function getCoverflowStep(width){
  const isMobile = width < 640;
  return isMobile ? Math.min(158, width * .40) : Math.min(210, Math.max(150, width * .19));
}

function positionCoverflowCards(){
  const track = document.getElementById('showcaseTrack');
  const viewport = getShowcaseViewport();
  if(!track) return;

  const cards = [...track.querySelectorAll('.wine-cover-card')];
  const total = cards.length;
  const activeIndex = getShowcaseActiveIndex();
  const width = viewport?.clientWidth || track.clientWidth || window.innerWidth;
  const isMobile = width < 640;
  const oneStep = getCoverflowStep(width);
  const twoStep = isMobile ? oneStep * 1.35 : oneStep * 1.78;
  // V19: el arrastre ya no mueve todo el carrusel fuera de pantalla.
  // Solo da una respuesta visual contenida; al soltar pagina vino por vino.
  const rawDrag = Number(showcaseState.dragOffset || 0);
  const drag = Math.max(-58, Math.min(58, rawDrag * .18));

  cards.forEach((card, index)=>{
    const diff = getCoverflowOffset(index, activeIndex, total);
    const abs = Math.abs(diff);
    const direction = diff < 0 ? -1 : 1;

    card.classList.remove('is-active', 'is-left', 'is-right', 'is-hidden');
    card.style.pointerEvents = 'auto';

    if(diff === 0){
      card.classList.add('is-active');
      card.style.zIndex = 10;
      card.style.opacity = '1';
      card.style.filter = 'none';
      // V21: evitamos translateZ en la tarjeta activa porque desajusta el hitbox
      // de los botones en algunos navegadores. Conservamos jerarquía visual con escala.
      card.style.transform = `translate(-50%, -50%) translateX(${drag}px) scale(1.05)`;
      return;
    }

    if(abs === 1){
      card.classList.add(diff < 0 ? 'is-left' : 'is-right');
      card.style.zIndex = 6;
      card.style.opacity = isMobile ? '.42' : '.52';
      card.style.filter = 'saturate(.72) brightness(.72)';
      card.style.transform = `translate(-50%, -50%) translateX(${direction * oneStep + drag}px) rotateY(${direction * -18}deg) scale(${isMobile ? .8 : .87})`;
      return;
    }

    if(abs === 2 && !isMobile){
      card.classList.add(diff < 0 ? 'is-left' : 'is-right');
      card.style.zIndex = 2;
      card.style.opacity = '.18';
      card.style.filter = 'saturate(.55) brightness(.58) blur(.35px)';
      card.style.transform = `translate(-50%, -50%) translateX(${direction * twoStep + drag}px) rotateY(${direction * -26}deg) scale(.74)`;
      return;
    }

    card.classList.add('is-hidden');
    card.style.zIndex = 0;
    card.style.opacity = '0';
    card.style.pointerEvents = 'none';
    card.style.filter = 'blur(2px)';
    card.style.transform = `translate(-50%, -50%) translateX(${direction * (twoStep + 130) + drag}px) scale(.62)`;
  });
}

function openCoverCard(card, index){
  if(!card) return;
  setShowcaseActiveIndex(index, false);
  const cards = [...document.querySelectorAll('#showcaseTrack .wine-cover-card')];
  cards.forEach(other => { if(other !== card) other.classList.remove('is-open'); });
  card.classList.add('is-open');
  stopShowcaseAutoplay();
  updateShowcaseStatus();
}

function closeCoverCards(){
  document.querySelectorAll('#showcaseTrack .wine-cover-card').forEach(c => c.classList.remove('is-open'));
  updateShowcaseStatus();
  scheduleShowcaseAutoplay(1600);
}

function toggleCoverCard(card){
  if(!card) return;
  const cards = [...document.querySelectorAll('#showcaseTrack .wine-cover-card')];
  const index = cards.indexOf(card);
  if(index < 0) return;
  const wasOpen = card.classList.contains('is-open');
  setShowcaseActiveIndex(index, false);
  cards.forEach(other => other.classList.remove('is-open'));
  if(wasOpen){
    scheduleShowcaseAutoplay(1800);
  }else{
    card.classList.add('is-open');
    stopShowcaseAutoplay();
  }
  updateShowcaseStatus();
}

function startShowcaseAutoplay(){
  stopShowcaseAutoplay();
  if((showcaseState.filtered.length || 0) <= 1) { updateShowcaseStatus(); return; }
  showcaseState.timer = setInterval(()=>{
    if(hasShowcaseExpanded() || showcaseState.dragging) return;
    moveShowcase(1, true);
  }, 6800);
  updateShowcaseStatus();
}

function scheduleShowcaseAutoplay(delay = 1800){
  clearTimeout(showcaseState.resumeTimer);
  showcaseState.resumeTimer = setTimeout(()=>startShowcaseAutoplay(), delay);
}

function moveShowcase(direction, fromAuto = false){
  document.querySelectorAll('#showcaseTrack .wine-cover-card').forEach(c => c.classList.remove('is-open'));
  const total = showcaseState.filtered.length || 0;
  if(!total) return;
  const current = getShowcaseActiveIndex();
  showcaseState.activeIndex = ((current + direction) % total + total) % total;
  showcaseState.activeId = showcaseState.filtered[showcaseState.activeIndex]?.id || null;
  showcaseState.dragOffset = 0;
  positionCoverflowCards();
  updateShowcaseCounter();
  updateShowcaseStatus();
  if(!fromAuto) scheduleShowcaseAutoplay(2200);
}

function bindShowcaseCarousel(){
  const root = document.getElementById('catalogShowcase');
  const viewport = getShowcaseViewport();
  if(!root || !viewport || root.dataset.bound === 'v19') return;
  root.dataset.bound = 'v19';

  root.querySelector('[data-showcase-prev]')?.addEventListener('click', event=>{
    event.preventDefault();
    moveShowcase(-1);
  });
  root.querySelector('[data-showcase-next]')?.addEventListener('click', event=>{
    event.preventDefault();
    moveShowcase(1);
  });

  root.addEventListener('mouseenter', stopShowcaseAutoplay);
  root.addEventListener('mouseleave', ()=>{
    clearTimeout(showcaseState.hoverTimer);
    if(!hasShowcaseExpanded() && !showcaseState.dragging) scheduleShowcaseAutoplay(1800);
    updateShowcaseStatus();
  });
  root.addEventListener('focusin', stopShowcaseAutoplay);
  root.addEventListener('focusout', ()=>scheduleShowcaseAutoplay(1800));

  root.addEventListener('mouseover', event=>{
    const card = event.target.closest?.('[data-showcase-card]');
    if(!card || card.contains(event.relatedTarget) || showcaseState.dragging) return;
    if(Date.now() < Number(showcaseState.hoverCooldown || 0)) return;

    clearTimeout(showcaseState.hoverTimer);
    showcaseState.hoverTimer = setTimeout(()=>{
      if(showcaseState.dragging || !card.matches(':hover')) return;
      const cards = [...document.querySelectorAll('#showcaseTrack .wine-cover-card')];
      const index = cards.indexOf(card);
      if(index < 0) return;
      showcaseState.hoverCooldown = Date.now() + 760;
      openCoverCard(card, index);
    }, 720);
  });

  root.addEventListener('focusin', event=>{
    const card = event.target.closest?.('[data-showcase-card]');
    if(!card) return;
    const cards = [...document.querySelectorAll('#showcaseTrack .wine-cover-card')];
    const index = cards.indexOf(card);
    if(index < 0) return;
    openCoverCard(card, index);
  });

  root.addEventListener('click', event=>{
    const detail = event.target.closest?.('[data-detail]');
    if(detail){
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(showcaseState.hoverTimer);
      if(typeof showProductDetail === 'function') showProductDetail(detail.dataset.detail);
      return;
    }

    const add = event.target.closest?.('[data-add-cart]');
    if(add){
      event.preventDefault();
      event.stopPropagation();
      clearTimeout(showcaseState.hoverTimer);
      if(typeof handleAddCartClick === 'function') handleAddCartClick(event, add);
      return;
    }

    if(Date.now() < Number(showcaseState.suppressClickUntil || 0)) return;
    const card = event.target.closest?.('[data-showcase-card]');
    if(!card) return;
    event.preventDefault();
    toggleCoverCard(card);
  });

  function endDrag(pointerId){
    if(!showcaseState.dragging) return;
    root.classList.remove('is-dragging');
    showcaseState.dragging = false;
    try{ viewport.releasePointerCapture?.(pointerId); }catch(_err){}

    const velocity = Number(showcaseState.dragVelocity || 0); // px/ms
    const raw = Number(showcaseState.dragOffset || 0);
    const projected = raw + velocity * 220;
    // V19: paginación controlada. Un gesto = máximo un vino.
    let steps = 0;
    if(projected < -46) steps = 1;
    if(projected > 46) steps = -1;

    if(Math.abs(raw) < 18 && Math.abs(velocity) < .22) steps = 0;
    if(Math.abs(raw) > 6) showcaseState.suppressClickUntil = Date.now() + 360;

    const total = showcaseState.filtered.length || 0;
    if(total && steps){
      const current = getShowcaseActiveIndex();
      showcaseState.activeIndex = ((current + steps) % total + total) % total;
      showcaseState.activeId = showcaseState.filtered[showcaseState.activeIndex]?.id || null;
      document.querySelectorAll('#showcaseTrack .wine-cover-card').forEach(c => c.classList.remove('is-open'));
    }

    showcaseState.dragOffset = 0;
    showcaseState.dragVelocity = 0;
    positionCoverflowCards();
    updateShowcaseCounter();
    updateShowcaseStatus();
    scheduleShowcaseAutoplay(2200);
  }

  viewport.addEventListener('pointerdown', event=>{
    if(event.target.closest?.('button,a,input,textarea,select,label')) return;
    if(typeof event.button === 'number' && event.button !== 0) return;
    clearTimeout(showcaseState.hoverTimer);
    stopShowcaseAutoplay();
    showcaseState.dragging = true;
    showcaseState.dragStartX = event.clientX;
    showcaseState.dragLastX = event.clientX;
    showcaseState.dragLastT = performance.now();
    showcaseState.dragOffset = 0;
    showcaseState.dragVelocity = 0;
    root.classList.add('is-dragging');
    try{ viewport.setPointerCapture?.(event.pointerId); }catch(_err){}
  }, {passive:true});

  viewport.addEventListener('pointermove', event=>{
    if(!showcaseState.dragging) return;
    event.preventDefault();
    const now = performance.now();
    const dx = event.clientX - Number(showcaseState.dragStartX || event.clientX);
    const dt = Math.max(8, now - Number(showcaseState.dragLastT || now));
    showcaseState.dragVelocity = (event.clientX - Number(showcaseState.dragLastX || event.clientX)) / dt;
    showcaseState.dragLastX = event.clientX;
    showcaseState.dragLastT = now;
    showcaseState.dragOffset = dx;
    // Respuesta visual moderada: no desplaza el carrusel completo.
    positionCoverflowCards();
  }, {passive:false});

  viewport.addEventListener('pointerup', event=>endDrag(event.pointerId));
  viewport.addEventListener('pointercancel', event=>endDrag(event.pointerId));
  viewport.addEventListener('lostpointercapture', ()=>endDrag());

  document.addEventListener('keydown', event=>{
    if(event.key === 'Escape') closeCoverCards();
    if(event.key === 'ArrowLeft') moveShowcase(-1);
    if(event.key === 'ArrowRight') moveShowcase(1);
  });

  window.addEventListener('resize', ()=>{
    clearTimeout(window.__coverflowResizeTimer);
    window.__coverflowResizeTimer = setTimeout(positionCoverflowCards, 150);
  }, {passive:true});
}
