/* =========================================================
   CATÁLOGO, FILTROS Y MODAL DE DETALLE
   FIX V4: lee ?bodega=Nombre desde Bodegas y filtra automáticamente.
========================================================= */
let currentCategory = 'Todos';
let catalogInitialized = false;
let initialUrlFiltersApplied = false;

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

  // Maison Blanche representa el portafolio/importador, no una bodega del selector del catálogo.
  if(normalizeText(decoded) === 'maison blanche') return 'Todos';

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
  return `<article class="product-card reveal">
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
        <span class="price">${money(item.precio)}</span>
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
        <div class="fw-black text-wine mb-3">${money(item.precio)}</div>
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
    grid.innerHTML = `<div class="col-12"><div class="empty-state"><i class="bi bi-search fs-1 d-block mb-2"></i><strong>No encontramos resultados</strong><p class="mb-0">Prueba cambiando filtros o búsqueda.</p></div></div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => `<div class="col-md-6 col-xl-4 d-flex">${productCard(p)}</div>`).join('');
  if(typeof observeReveals === 'function') observeReveals();
}

function showProductDetail(id){
  const item = allItems().find(p => p.id === id);
  if(!item) return;

  const title = document.getElementById('productModalTitle');
  const body = document.getElementById('productModalBody');
  if(!title || !body) return;

  title.textContent = item.nombre;
  const whatsappMsg = encodeURIComponent(`Hola, quiero consultar disponibilidad de ${item.nombre} - ${item.bodega}.`);

  body.innerHTML = `<div class="row g-4 align-items-center">
    <div class="col-lg-5"><div class="product-detail-img"><img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${CONFIG.placeholderImage}'"></div></div>
    <div class="col-lg-7">
      <span class="product-badge position-static d-inline-block mb-3">${item.etiqueta || item.categoria || 'Vino'}</span>
      <h2 class="font-title display-5 mb-2">${item.nombre}</h2>
      <p class="product-meta mb-3">${item.bodega} · ${item.linea || 'Colección'}</p>
      <p class="section-text">${item.descripcion || 'Consultar descripción.'}</p>
      <div class="row g-3 mb-4">
        <div class="col-sm-6"><div class="stat-card"><strong>País / región</strong><br><span>${item.pais || 'Consultar'} · ${item.region || 'Consultar'}</span></div></div>
        <div class="col-sm-6"><div class="stat-card"><strong>Cepa</strong><br><span>${item.cepa || 'Consultar'}</span></div></div>
        <div class="col-sm-6"><div class="stat-card"><strong>Alcohol</strong><br><span>${item.alcohol || 'Consultar'}</span></div></div>
        <div class="col-sm-6"><div class="stat-card"><strong>Servicio</strong><br><span>${item.temperatura || 'Consultar'}</span></div></div>
      </div>
      <div class="paper-card p-3 mb-4"><strong><i class="bi bi-egg-fried text-gold me-2"></i>Maridaje / gastronomía</strong><p class="mb-0 mt-2 text-muted">${item.maridaje || 'Consultar'}</p></div>
      <div class="d-flex flex-column flex-sm-row gap-2">
        <button class="btn btn-wine" type="button" data-add-cart="${item.id}"><i class="bi bi-bag-plus"></i> Añadir al carrito</button>
        <a class="btn btn-maison" target="_blank" rel="noopener" href="https://wa.me/${CONFIG.whatsappNumber}?text=${whatsappMsg}"><i class="bi bi-whatsapp"></i> Consultar por WhatsApp</a>
      </div>
    </div>
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
