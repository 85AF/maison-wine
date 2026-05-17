/* =========================================================
   V35 - Páginas por empresa: grilla limpia y filtros propios
========================================================= */
(function(){
  const state = { bodega: 'Todos', tipo: 'Todos', q: '' };

  function safe(value){
    return String(value ?? '').replace(/[&<>"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  }

  function normalize(value){
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  }

  function price(value){
    if (typeof money === 'function') return money(value);
    if(value === null || value === undefined || value === '') return 'Consultar';
    const n = Number(value);
    return Number.isFinite(n) ? `${n.toFixed(2)} €` : 'Consultar';
  }

  function shortText(text, max = 112){
    const clean = String(text || 'Consultar disponibilidad.').trim();
    return clean.length > max ? clean.slice(0, max).trim() + '…' : clean;
  }

  function productMatches(item){
    const q = normalize(state.q);
    const searchable = normalize(`${item.nombre} ${item.bodega} ${item.cepa} ${item.region} ${item.categoria} ${item.maridaje}`);
    return (state.bodega === 'Todos' || item.bodega === state.bodega)
      && (state.tipo === 'Todos' || item.categoria === state.tipo)
      && (!q || searchable.includes(q));
  }

  function renderFilters(){
    const target = document.getElementById('companyFilters');
    if(!target) return;
    const products = window.PRODUCTS || [];
    const bodegas = ['Todos', ...new Set(products.map(p => p.bodega).filter(Boolean))];
    const tipos = ['Todos', ...new Set(products.map(p => p.categoria).filter(Boolean))];

    target.innerHTML = `
      <div class="company-search">
        <i class="bi bi-search"></i>
        <input type="search" data-company-search placeholder="Buscar por nombre, cepa, bodega o región..." value="${safe(state.q)}">
      </div>
      <div class="company-filter-group" aria-label="Filtrar por bodega">
        <span>Bodega</span>
        <div>${bodegas.map(name => `<button type="button" class="company-chip ${state.bodega === name ? 'active' : ''}" data-filter-kind="bodega" data-filter-value="${safe(name)}">${safe(name)}</button>`).join('')}</div>
      </div>
      <div class="company-filter-group" aria-label="Filtrar por tipo">
        <span>Tipo</span>
        <div>${tipos.map(name => `<button type="button" class="company-chip ${state.tipo === name ? 'active' : ''}" data-filter-kind="tipo" data-filter-value="${safe(name)}">${safe(name)}</button>`).join('')}</div>
      </div>
    `;
  }

  function productCard(item){
    return `
      <article class="company-wine-card">
        <div class="company-wine-media">
          <span class="company-wine-badge">${safe(item.categoria || item.etiqueta || 'Vino')}</span>
          <img src="${safe(item.imagen)}" alt="${safe(item.nombre)}" onerror="this.src='${window.CONFIG?.placeholderImage || 'assets/img/productos/placeholder-botella.png'}'">
        </div>
        <div class="company-wine-body">
          <div class="company-wine-kicker">${safe(item.bodega)} · ${safe(item.pais || '')}</div>
          <h3>${safe(item.nombre)}</h3>
          <p>${safe(shortText(item.descripcion, 125))}</p>
          <div class="company-wine-specs">
            <span><i class="bi bi-droplet"></i>${safe(item.cepa || 'Consultar')}</span>
            <span><i class="bi bi-geo-alt"></i>${safe(item.region || 'Consultar')}</span>
          </div>
          <div class="company-wine-bottom">
            <div class="company-wine-actions">
              <button type="button" class="company-btn ghost" data-detail="${safe(item.id)}"><i class="bi bi-eye"></i> Ver detalle</button>
              <button type="button" class="company-btn accent" data-add-cart="${safe(item.id)}"><i class="bi bi-bag-plus"></i> Añadir</button>
            </div>
          </div>
        </div>
      </article>`;
  }

  function renderProducts(){
    const grid = document.getElementById('companyProductsGrid');
    if(!grid) return;
    const products = (window.PRODUCTS || []).filter(productMatches);
    if(!products.length){
      grid.innerHTML = `<div class="company-empty"><strong>No hay vinos con esos filtros.</strong><span>Intenta cambiar bodega, tipo o búsqueda.</span></div>`;
      return;
    }
    grid.innerHTML = products.map(productCard).join('');
  }

  function render(){
    renderFilters();
    renderProducts();
  }

  function bind(){
    document.addEventListener('input', event => {
      const input = event.target.closest?.('[data-company-search]');
      if(!input) return;
      state.q = input.value || '';
      renderProducts();
    });

    document.addEventListener('click', event => {
      const chip = event.target.closest?.('[data-filter-kind]');
      if(!chip) return;
      const kind = chip.dataset.filterKind;
      const value = chip.dataset.filterValue || 'Todos';
      if(kind === 'bodega') state.bodega = value;
      if(kind === 'tipo') state.tipo = value;
      render();
    });
  }

  window.addEventListener('layout:ready', render);
  document.addEventListener('DOMContentLoaded', () => {
    bind();
    setTimeout(render, 80);
  });
})();
