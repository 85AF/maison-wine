/* =========================================================
   V39 - Contexto central de empresa
   Un solo sitio para controlar logo, menú, catálogo y alcance.
   - Vitis: Ventisquero, Argento, Zonin, Félix Solís.
   - Maison Blanche: Trapiche, El Esteco.
========================================================= */
(function(){
  const STORAGE_KEY = 'maisonActiveCompany';

  const companies = {
    vitis: {
      key: 'vitis',
      name: 'Vitis',
      logo: 'assets/img/logo/logo-vitis.png',
      catalog: 'catalogo-vitis.html',
      home: 'vitis.html',
      otherKey: 'maison',
      otherName: 'Maison',
      otherHome: 'maison-blanche.html',
      bodegas: ['Ventisquero', 'Argento', 'Zonin', 'Félix Solís']
    },
    maison: {
      key: 'maison',
      name: 'Maison Blanche',
      logo: 'assets/img/logo/logo-maison-blanche.png',
      catalog: 'catalogo-maison-blanche.html',
      home: 'maison-blanche.html',
      otherKey: 'vitis',
      otherName: 'Vitis',
      otherHome: 'vitis.html',
      bodegas: ['Trapiche', 'El Esteco']
    }
  };

  window.COMPANY_CONFIGS = companies;

  function normalize(value){
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  }

  function getFile(){
    return (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  }

  function urlCompany(){
    try{
      const params = new URLSearchParams(location.search || '');
      const raw = params.get('empresa') || params.get('company') || params.get('marca') || '';
      const value = normalize(raw);
      if(value.includes('vitis')) return 'vitis';
      if(value.includes('maison')) return 'maison';
    }catch(e){}
    return '';
  }

  function storedCompany(){
    try{
      const value = localStorage.getItem(STORAGE_KEY);
      return companies[value] ? value : '';
    }catch(e){ return ''; }
  }

  function resolveCompany(){
    const bodyScope = document.body?.dataset?.company;
    if(companies[bodyScope]) return bodyScope;

    const byUrl = urlCompany();
    if(byUrl) return byUrl;

    const file = getFile();
    if(file === 'vitis.html' || file === 'catalogo-vitis.html') return 'vitis';
    if(file === 'maison-blanche.html' || file === 'catalogo-maison-blanche.html') return 'maison';

    if(file !== 'index.html') return storedCompany();
    return '';
  }

  function belongs(item, config){
    const bodega = normalize(item?.bodega);
    return config.bodegas.some(name => normalize(name) === bodega);
  }

  function withCompany(url, key = activeKey){
    if(!key || !companies[key]) return url;
    const [path, hash = ''] = url.split('#');
    const separator = path.includes('?') ? '&' : '?';
    return `${path}${separator}empresa=${encodeURIComponent(key)}${hash ? '#' + hash : ''}`;
  }

  const activeKey = resolveCompany();
  const config = companies[activeKey] || null;
  window.ACTIVE_COMPANY = config;

  if(config){
    try{ localStorage.setItem(STORAGE_KEY, activeKey); }catch(e){}
    document.documentElement.dataset.company = activeKey;
    document.body?.setAttribute('data-company', activeKey);
    document.body?.classList.add(`company-${activeKey}`);

    window.ALL_PRODUCTS = Array.isArray(window.PRODUCTS) ? [...window.PRODUCTS] : [];
    window.ALL_BODEGAS = Array.isArray(window.BODEGAS) ? [...window.BODEGAS] : [];
    window.PRODUCTS = window.ALL_PRODUCTS.filter(item => belongs(item, config));
    window.BODEGAS = window.ALL_BODEGAS.filter(item => config.bodegas.some(name => normalize(name) === normalize(item.nombre)));

    if(window.CONFIG){
      window.CONFIG.brandName = config.name;
      window.CONFIG.logoPath = config.logo;
    }
  }

  function setCompanyHeader(){
    if(!config) return;

    const current = getFile();
    const brand = document.querySelector('.brand-mark');
    if(brand){
      brand.href = config.home;
      brand.setAttribute('aria-label', config.name);
    }

    document.querySelectorAll('.brand-mark img, .footer-logo').forEach(img => {
      img.src = config.logo;
      img.alt = config.name;
    });
    document.querySelectorAll('.brand-text,.footer-brand,.footer-brand-inline').forEach(el => {
      el.textContent = config.name;
    });

    const nav = document.querySelector('#mainMenu .navbar-nav');
    if(nav){
      const isHome = current === config.home.toLowerCase();
      const isCatalog = current === config.catalog.toLowerCase();
      const isNosotros = current === 'nosotros.html';
      const isContacto = current === 'contacto.html';
      nav.innerHTML = `
        <li class="nav-item"><a class="nav-link ${current === 'index.html' ? 'active' : ''}" href="index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link ${isHome ? 'active' : ''}" href="${config.otherHome}">${config.otherName}</a></li>
        <li class="nav-item"><a class="nav-link ${isCatalog ? 'active' : ''}" href="${config.catalog}">Catálogo</a></li>
        <li class="nav-item"><a class="nav-link ${isNosotros ? 'active' : ''}" href="${withCompany('nosotros.html')}">Nosotros</a></li>
        <li class="nav-item"><a class="nav-link ${isContacto ? 'active' : ''}" href="${withCompany('contacto.html')}">Contáctanos</a></li>
      `;
    }

    document.querySelectorAll('a[href="nosotros.html"]').forEach(a => a.href = withCompany('nosotros.html'));
    document.querySelectorAll('a[href="contacto.html"]').forEach(a => a.href = withCompany('contacto.html'));
    document.querySelectorAll('a[href="politica-privacidad.html"]').forEach(a => a.href = withCompany('politica-privacidad.html'));
    document.querySelectorAll('a[href="preguntas-frecuentes.html"]').forEach(a => a.href = withCompany('preguntas-frecuentes.html'));
    document.querySelectorAll('a[href="aviso-legal.html"]').forEach(a => a.href = withCompany('aviso-legal.html'));

    const collectionLinks = document.querySelector('.footer-maison .footer-title')?.parentElement;
    if(collectionLinks){
      const linksBox = collectionLinks.querySelector('.d-grid');
      if(linksBox){
        linksBox.innerHTML = `
          <a href="index.html">Inicio</a>
          <a href="vitis.html">Vitis</a>
          <a href="maison-blanche.html">Maison Blanche</a>
          <a href="${config.catalog}">Catálogo ${config.name}</a>
        `;
      }
    }
  }

  function initCompanyDom(){
    if(!config) return;

    document.querySelectorAll('[data-company-name]').forEach(el => el.textContent = config.name);
    document.querySelectorAll('[data-company-logo]').forEach(img => {
      img.src = config.logo;
      img.alt = config.name;
    });
    document.querySelectorAll('[data-company-catalog-link]').forEach(a => a.href = config.catalog);

    const countryFilter = document.getElementById('countryFilter');
    if(countryFilter){
      const countries = ['Todos', ...new Set((window.PRODUCTS || []).map(p => p.pais).filter(Boolean))];
      countryFilter.innerHTML = countries.map(value => `<option>${value}</option>`).join('');
    }

    const wineryFilter = document.getElementById('wineryFilter');
    if(wineryFilter){
      wineryFilter.innerHTML = ['Todos', ...config.bodegas].map(value => `<option>${value}</option>`).join('');
    }

    setCompanyHeader();
  }

  document.addEventListener('DOMContentLoaded', initCompanyDom);
  window.addEventListener('layout:ready', setCompanyHeader);
})();
