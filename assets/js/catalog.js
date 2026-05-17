/* =========================================================
   CATÁLOGO, FILTROS Y MODAL DE DETALLE
   FIX V4: lee ?bodega=Nombre desde Bodegas y filtra automáticamente.
========================================================= */
let currentCategory = 'Todos';
let catalogInitialized = false;
let initialUrlFiltersApplied = false;


function closeLuxurySelects(exceptId = ''){
  document.querySelectorAll('.lux-select').forEach(wrapper => {
    const isCurrent = exceptId && wrapper.dataset.selectId === exceptId;
    wrapper.classList.toggle('is-open', Boolean(isCurrent));
    const trigger = wrapper.querySelector('.lux-select-trigger');
    if(trigger) trigger.setAttribute('aria-expanded', isCurrent ? 'true' : 'false');
  });
}

function syncLuxurySelect(select){
  if(!select) return;
  const wrapper = document.querySelector(`.lux-select[data-select-id="${select.id}"]`);
  if(!wrapper) return;

  const valueLabel = wrapper.querySelector('.lux-select-value');
  const optionButtons = [...wrapper.querySelectorAll('.lux-select-option')];
  const selectedOption = [...select.options].find(opt => opt.value === select.value) || select.options[select.selectedIndex] || select.options[0];
  const selectedValue = selectedOption?.value || 'Todos';
  const selectedText = selectedOption?.textContent || selectedValue;

  if(valueLabel) valueLabel.textContent = selectedText;
  optionButtons.forEach(btn => {
    const active = btn.dataset.value === selectedValue;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function enhanceLuxurySelect(selectId){
  const select = document.getElementById(selectId);
  if(!select || select.dataset.enhanced === 'true') return;

  select.dataset.enhanced = 'true';
  select.classList.add('lux-native-select');

  const wrapper = document.createElement('div');
  wrapper.className = 'lux-select';
  wrapper.dataset.selectId = select.id;

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'lux-select-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.innerHTML = '<span class="lux-select-value"></span><i class="bi bi-chevron-down"></i>';

  const menu = document.createElement('div');
  menu.className = 'lux-select-menu';
  menu.setAttribute('role', 'listbox');

  [...select.options].forEach((opt, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.type = 'button';
    optionBtn.className = 'lux-select-option';
    optionBtn.dataset.value = opt.value;
    optionBtn.dataset.index = String(index);
    optionBtn.setAttribute('role', 'option');
    optionBtn.textContent = opt.textContent;
    optionBtn.addEventListener('click', () => {
      select.value = opt.value;
      syncLuxurySelect(select);
      closeLuxurySelects('');
      select.dispatchEvent(new Event('change', { bubbles: true }));
    });
    menu.appendChild(optionBtn);
  });

  trigger.addEventListener('click', event => {
    event.preventDefault();
    const willOpen = !wrapper.classList.contains('is-open');
    closeLuxurySelects(willOpen ? select.id : '');
  });

  wrapper.appendChild(trigger);
  wrapper.appendChild(menu);
  select.insertAdjacentElement('afterend', wrapper);

  select.addEventListener('change', () => syncLuxurySelect(select));
  syncLuxurySelect(select);
}

function initLuxurySelects(){
  enhanceLuxurySelect('countryFilter');
  enhanceLuxurySelect('wineryFilter');

  document.addEventListener('click', event => {
    if(event.target.closest('.lux-select')) return;
    closeLuxurySelects('');
  });

  document.addEventListener('keydown', event => {
    if(event.key === 'Escape') closeLuxurySelects('');
  });
}


function shortText(text, limit = 120){
  if(!text) return 'Consultar';
  return text.length > limit ? text.slice(0, limit).trim() + '…' : text;
}

function normalizeText(value){
  return String(value || '')
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function getUrlParam(name){
  try {
    return new URLSearchParams(window.location.search).get(name);
  } catch (err) {
    return null;
  }
}

function resolveBodegaFromUrl(){
  const raw = getUrlParam('bodega') || getUrlParam('winery') || getUrlParam('marca');
  if(!raw) return null;

  const decoded = decodeURIComponent(raw).trim();
  if(!decoded || normalizeText(decoded) === 'todos') return 'Todos';


  const bodegasDisponibles = [...new Set((window.PRODUCTS || []).map(p => p.bodega).filter(Boolean))];
  const found = bodegasDisponibles.find(name => normalizeText(name) === normalizeText(decoded));
  return found || decoded;
}

function ensureWineryOption(value){
  const select = document.getElementById('wineryFilter');
  if(!select || !value || value === 'Todos') return;

  const exists = [...select.options].some(opt => normalizeText(opt.value || opt.textContent) === normalizeText(value));
  if(!exists){
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  }
  select.value = value;
}

function updateCatalogHeroByBodega(bodega){
  if(!bodega || bodega === 'Todos') return;
  const title = document.querySelector('.page-hero h1');
  const text = document.querySelector('.page-hero p');
  if(title) title.textContent = `Vinos de ${bodega}`;
  if(text) text.textContent = `Catálogo filtrado por ${bodega}. Puedes seguir usando búsqueda, país, categoría o cambiar la bodega desde los filtros.`;
}

function applyInitialUrlFilters(){
  if(initialUrlFiltersApplied) return;
  initialUrlFiltersApplied = true;

  const bodega = resolveBodegaFromUrl();
  if(bodega && bodega !== 'Todos'){
    ensureWineryOption(bodega);
    updateCatalogHeroByBodega(bodega);
  }

  const categoria = getUrlParam('categoria');
  if(categoria){
    const categoryButton = [...document.querySelectorAll('[data-category]')]
      .find(btn => normalizeText(btn.dataset.category) === normalizeText(categoria));
    if(categoryButton){
      currentCategory = categoryButton.dataset.category;
      document.querySelectorAll('[data-category]').forEach(b => b.classList.toggle('active', b === categoryButton));
    }
  }
}

function productCard(item){
  return `<article class="product-card reveal visible">
    <div class="product-img-wrap">
      <span class="product-badge">${item.etiqueta || item.categoria || 'Vino'}</span>
      <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${CONFIG.placeholderImage}'">
    </div>
    <div class="product-body">
      <div class="product-meta mb-1">${item.bodega} · ${item.pais}</div>
      <h3>${item.nombre}</h3>
      <div class="spec-list">
        <div class="spec-item"><i class="bi bi-geo-alt"></i><span>${item.region || 'Consultar'}</span></div>
        <div class="spec-item"><i class="bi bi-droplet"></i><span>${item.cepa || 'Consultar'}</span></div>
        <div class="spec-item"><i class="bi bi-thermometer-snow"></i><span>${item.temperatura || 'Consultar'}</span></div>
      </div>
      <p class="product-desc">${shortText(item.descripcion, 132)}</p>
      <div class="d-flex justify-content-between align-items-center gap-2 mb-3">
        <small class="text-muted">${item.alcohol || 'Consultar'}</small>
      </div>
      <div class="product-actions d-grid gap-2">
        <button class="btn btn-outline-maison" type="button" data-detail="${item.id}"><i class="bi bi-eye"></i> Ver detalle</button>
        <button class="btn btn-wine" type="button" data-add-cart="${item.id}" aria-label="Añadir ${item.nombre} al carrito"><i class="bi bi-bag-plus"></i> Añadir al carrito</button>
      </div>
    </div>
  </article>`;
}

function packCard(item){
  return `<article class="pack-card reveal">
    <div class="row g-3 align-items-center">
      <div class="col-4"><img class="rounded-4" src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${CONFIG.placeholderImage}'"></div>
      <div class="col-8">
        <span class="product-badge position-static d-inline-block mb-2">${item.etiqueta || 'Pack'}</span>
        <h3>${item.nombre}</h3>
        <p class="section-text small mb-2">${item.descripcion}</p>
        <button class="btn btn-maison btn-sm" type="button" data-add-cart="${item.id}"><i class="bi bi-bag-plus"></i> Añadir pack</button>
      </div>
    </div>
  </article>`;
}

function renderCatalog(){
  const grid = document.getElementById('productGrid');
  if(!grid) return;

  const search = (document.getElementById('catalogSearch')?.value || '').toLowerCase().trim();
  const country = document.getElementById('countryFilter')?.value || 'Todos';
  const winery = document.getElementById('wineryFilter')?.value || 'Todos';

  const filtered = (window.PRODUCTS || []).filter(p => {
    const matchesCategory = currentCategory === 'Todos' || p.categoria === currentCategory;
    const matchesCountry = country === 'Todos' || p.pais === country;
    const matchesWinery = winery === 'Todos' || p.bodega === winery;
    const searchable = `${p.nombre} ${p.cepa} ${p.bodega} ${p.region} ${p.maridaje} ${p.categoria}`.toLowerCase();
    const matchesSearch = !search || searchable.includes(search);
    return matchesCategory && matchesCountry && matchesWinery && matchesSearch;
  });

  const countText = winery !== 'Todos'
    ? `${filtered.length} vinos encontrados · ${winery}`
    : `${filtered.length} vinos encontrados`;
  document.getElementById('productCount')?.replaceChildren(document.createTextNode(countText));

  if(filtered.length === 0){
    grid.innerHTML = `<div class="col-12"><div class="empty-state"><i class="bi bi-search fs-1 d-block mb-2"></i><strong>No encontramos resultados</strong><p class="mb-0">Intenta cambiar filtros o búsqueda.</p></div></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `<div class="col-md-6 col-xl-4 d-flex">${productCard(p)}</div>`).join('');
  if(typeof observeReveals === 'function') observeReveals();
}


function escapeHtml(value){
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderPdfDetail(item){
  const detail = item.detallePdf || {};
  const officialDescription = detail.descripcionOficial || item.descripcion || 'Consultar descripción.';
  const ficha = detail.ficha || {};
  const longLabels = ['fermentación', 'fermentacion', 'roble', 'crianza', 'gastronomía', 'gastronomia', 'acompañante', 'información', 'informacion'];
  const rows = Object.entries(ficha)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([label, value]) => {
      const cleanLabel = String(label || '').trim();
      const cleanValue = String(value || '').trim();
      const isLong = longLabels.some(term => cleanLabel.toLowerCase().includes(term)) || cleanValue.length > 95;
      return `
        <div class="pdf-detail-row ${isLong ? 'is-wide' : ''}">
          <span>${escapeHtml(cleanLabel)}</span>
          <strong>${escapeHtml(cleanValue)}</strong>
        </div>
      `;
    }).join('');

  const infoAdicional = detail.infoAdicional
    ? `<div class="pdf-detail-extra"><strong>Información adicional</strong><p>${escapeHtml(detail.infoAdicional)}</p></div>`
    : '';

  return `
    <div class="official-detail-block official-detail-compact">
      <div class="official-detail-topline">
        <span class="official-detail-kicker">Ficha oficial del catálogo</span>
        <h3>Información completa</h3>
      </div>
      <p class="official-description">${escapeHtml(officialDescription)}</p>
      <div class="pdf-detail-grid">${rows}</div>
      ${infoAdicional}
    </div>
  `;
}

function showProductDetail(id){
  const item = allItems().find(p => p.id === id);
  if(!item) return;

  const title = document.getElementById('productModalTitle');
  const body = document.getElementById('productModalBody');
  if(!title || !body) return;

  title.textContent = item.nombre;
  const whatsappMsg = encodeURIComponent(`Hola, quiero consultar disponibilidad de ${item.nombre} - ${item.bodega}.`);

  body.innerHTML = `<div class="product-detail-layout">
    <aside class="product-detail-visual">
      <div class="product-detail-img"><img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${CONFIG.placeholderImage}'"></div>
    </aside>
    <section class="product-detail-content">
      <div class="product-detail-heading">
        <span class="product-badge position-static d-inline-block">${item.etiqueta || item.categoria || 'Vino'}</span>
        <h2 class="font-title product-detail-title">${item.nombre}</h2>
        <p class="product-meta product-detail-meta">${item.bodega} · ${item.linea || 'Colección'}</p>
      </div>
      ${renderPdfDetail(item)}
      <div class="product-detail-actions">
        <button class="btn btn-wine" type="button" data-add-cart="${item.id}"><i class="bi bi-bag-plus"></i> Añadir al carrito</button>
        <a class="btn btn-maison" target="_blank" rel="noopener" href="https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMsg}"><i class="bi bi-whatsapp"></i> Consultar por WhatsApp</a>
      </div>
    </section>
  </div>`;

  const modalEl = document.getElementById('productModal');
  if(window.bootstrap?.Modal && modalEl){
    window.bootstrap.Modal.getOrCreateInstance(modalEl).show();
  } else if(modalEl){
    modalEl.classList.add('show');
    modalEl.style.display = 'block';
  }
}

function initCatalog(){
  if(catalogInitialized){
    renderCatalog();
    return;
  }
  catalogInitialized = true;

  applyInitialUrlFilters();
  initLuxurySelects();

  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.dataset.category;
      document.querySelectorAll('[data-category]').forEach(b => b.classList.toggle('active', b === btn));
      renderCatalog();
    });
  });

  ['catalogSearch', 'countryFilter', 'wineryFilter'].forEach(id => {
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('input', renderCatalog);
    el.addEventListener('change', renderCatalog);
  });

  document.addEventListener('click', e => {
    const detail = e.target.closest?.('[data-detail]');
    if(detail){
      e.preventDefault();
      showProductDetail(detail.dataset.detail);
    }
  });

  renderCatalog();
}

window.addEventListener('layout:ready', initCatalog);
document.addEventListener('DOMContentLoaded', () => setTimeout(initCatalog, 120));
if(document.readyState !== 'loading') setTimeout(initCatalog, 120);
