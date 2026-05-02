/* =========================================================
   INTERACCIONES GENERALES, RENDER DE SECCIONES Y FORMULARIOS
   FIX V6: carrusel horizontal con 52 productos + filtros por bodega/tipo.
========================================================= */
let showcaseState = {
  index: 0,
  total: 0,
  timer: null,
  activeBodega: 'Todos',
  activeTipo: 'Todos',
  filtered: []
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

function getShowcaseGap(){
  const track = document.getElementById('showcaseTrack');
  if(!track) return 24;
  const style = window.getComputedStyle(track);
  return parseFloat(style.columnGap || style.gap || '24') || 24;
}

function getVisibleShowcaseItems(){
  const viewport = document.getElementById('showcaseViewport');
  const firstItem = document.querySelector('#showcaseTrack .showcase-item');
  if(!viewport || !firstItem) return 1;
  const gap = getShowcaseGap();
  const itemWidth = firstItem.getBoundingClientRect().width || viewport.clientWidth;
  return Math.max(1, Math.floor((viewport.clientWidth + gap) / (itemWidth + gap)));
}

function getMaxShowcaseIndex(){
  return Math.max(0, showcaseState.filtered.length - getVisibleShowcaseItems());
}

function updateShowcaseCarousel(smooth = true){
  const track = document.getElementById('showcaseTrack');
  const viewport = document.getElementById('showcaseViewport');
  if(!track || !viewport) return;

  const maxIndex = getMaxShowcaseIndex();

  if(showcaseState.index > maxIndex) showcaseState.index = 0;
  if(showcaseState.index < 0) showcaseState.index = maxIndex;

  const firstItem = track.querySelector('.showcase-item');
  const gap = getShowcaseGap();
  const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : viewport.clientWidth;
  const offset = showcaseState.index * (itemWidth + gap);

  track.style.transition = smooth ? 'transform .65s cubic-bezier(.22,.61,.36,1)' : 'none';
  track.style.transform = `translateX(-${offset}px)`;

  const current = document.querySelector('[data-showcase-current]');
  const total = document.querySelector('[data-showcase-total]');
  const visible = document.querySelector('[data-showcase-visible]');
  const totalItems = showcaseState.filtered.length || 0;

  if(current) current.textContent = totalItems ? String(Math.min(showcaseState.index + 1, totalItems)).padStart(2, '0') : '00';
  if(total) total.textContent = String(totalItems).padStart(2, '0');
  if(visible) visible.textContent = getVisibleShowcaseItems();

  document.querySelectorAll('[data-showcase-prev], [data-showcase-next]').forEach(btn=>{
    btn.disabled = totalItems <= getVisibleShowcaseItems();
  });
}

function startShowcaseAutoplay(){
  stopShowcaseAutoplay();
  if((showcaseState.filtered.length || 0) <= getVisibleShowcaseItems()) return;

  showcaseState.timer = setInterval(()=>{
    const maxIndex = getMaxShowcaseIndex();
    showcaseState.index = showcaseState.index >= maxIndex ? 0 : showcaseState.index + 1;
    updateShowcaseCarousel(true);
  }, 4200);
}

function moveShowcase(direction){
  const maxIndex = getMaxShowcaseIndex();
  showcaseState.index += direction;

  if(showcaseState.index > maxIndex) showcaseState.index = 0;
  if(showcaseState.index < 0) showcaseState.index = maxIndex;

  updateShowcaseCarousel(true);
  startShowcaseAutoplay();
}

function renderShowcaseFilters(products){
  const filters = document.getElementById('showcaseFilters');
  if(!filters) return;

  const bodegas = uniqueValues(products, 'bodega');
  const tipos = uniqueValues(products, 'categoria');

  filters.innerHTML = `
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
  return (window.PRODUCTS || []).filter(item=>{
    const matchesBodega = showcaseState.activeBodega === 'Todos' || item.bodega === showcaseState.activeBodega;
    const matchesTipo = showcaseState.activeTipo === 'Todos' || item.categoria === showcaseState.activeTipo;
    return matchesBodega && matchesTipo;
  });
}

function renderShowcaseProducts(){
  const track = document.getElementById('showcaseTrack');
  const empty = document.getElementById('showcaseEmpty');
  const count = document.querySelector('[data-showcase-count]');
  if(!track) return;

  showcaseState.filtered = getShowcaseProducts();
  showcaseState.index = 0;
  showcaseState.total = showcaseState.filtered.length;

  if(count) count.textContent = `${showcaseState.filtered.length} etiquetas`;

  if(!showcaseState.filtered.length){
    track.innerHTML = '';
    if(empty) empty.hidden = false;
    updateShowcaseCarousel(false);
    stopShowcaseAutoplay();
    return;
  }

  if(empty) empty.hidden = true;

  track.innerHTML = showcaseState.filtered.map(p => `
    <div class="showcase-item">
      ${productCard(p)}
    </div>
  `).join('');

  if(typeof observeReveals === 'function') observeReveals();
  requestAnimationFrame(()=>{
    updateShowcaseCarousel(false);
    startShowcaseAutoplay();
  });
}

function bindShowcaseCarousel(){
  const root = document.getElementById('catalogShowcase');
  if(!root || root.dataset.bound === 'true') return;
  root.dataset.bound = 'true';

  root.querySelector('[data-showcase-prev]')?.addEventListener('click', ()=> moveShowcase(-1));
  root.querySelector('[data-showcase-next]')?.addEventListener('click', ()=> moveShowcase(1));

  root.addEventListener('mouseenter', stopShowcaseAutoplay);
  root.addEventListener('mouseleave', startShowcaseAutoplay);
  root.addEventListener('focusin', stopShowcaseAutoplay);
  root.addEventListener('focusout', startShowcaseAutoplay);

  let startX = 0;
  let isTouching = false;

  root.addEventListener('touchstart', event=>{
    startX = event.touches?.[0]?.clientX || 0;
    isTouching = true;
    stopShowcaseAutoplay();
  }, {passive:true});

  root.addEventListener('touchend', event=>{
    if(!isTouching) return;
    const endX = event.changedTouches?.[0]?.clientX || startX;
    const delta = endX - startX;
    if(Math.abs(delta) > 45) moveShowcase(delta < 0 ? 1 : -1);
    isTouching = false;
    startShowcaseAutoplay();
  }, {passive:true});
}

function renderFeatured(){
  const root = document.getElementById('catalogShowcase');
  if(!root || typeof productCard !== 'function') return;

  const products = window.PRODUCTS || [];
  if(!products.length) return;

  renderShowcaseFilters(products);
  bindShowcaseCarousel();
  renderShowcaseProducts();
}

function getBodegaCatalogTarget(bodega){
  if(!bodega || !bodega.nombre) return 'Todos';
  if(bodega.nombre === 'Maison Blanche') return 'Todos';
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
        'Botella 1 · contenido provisional editable.',
        'Botella 2 · contenido provisional editable.',
        'Botella 3 · contenido provisional editable.'
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
        <p class="section-text mb-3">${item.descripcion || 'Contenido provisional editable.'}</p>
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
