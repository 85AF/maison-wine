/* =========================================================
   V46 - Carrusel por empresa estable + autoplay
   Usa window.PRODUCTS ya filtrado por company-scope.js.
========================================================= */
(function(){
  const state = { index: 0, timer: null, products: [] };
  const AUTOPLAY_MS = 4200;

  function safe(value){
    return String(value ?? '').replace(/[&<>\"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
  }

  function shortText(text, max = 128){
    const clean = String(text || 'Consultar disponibilidad.').trim();
    return clean.length > max ? clean.slice(0, max).trim() + '…' : clean;
  }

  function offsetFor(index, active, total){
    let diff = index - active;
    if(total > 2){
      if(diff > total / 2) diff -= total;
      if(diff < -total / 2) diff += total;
    }
    return diff;
  }

  function card(item, index){
    return `
      <article class="company-carousel-card" data-company-carousel-card data-index="${index}" data-product-id="${safe(item.id)}" tabindex="0" aria-label="${safe(item.nombre)}">
        <div class="company-carousel-image">
          <span class="company-carousel-badge">${safe(item.categoria || item.etiqueta || 'Vino')}</span>
          <img src="${safe(item.imagen)}" alt="${safe(item.nombre)}" onerror="this.src='${window.CONFIG?.placeholderImage || 'assets/img/productos/placeholder-botella.png'}'">
        </div>
        <div class="company-carousel-info">
          <div class="company-carousel-kicker">${safe(item.bodega)} · ${safe(item.pais || '')}</div>
          <h2>${safe(item.nombre)}</h2>
          <p>${safe(shortText(item.descripcion))}</p>
          <div class="company-carousel-meta">
            <span><i class="bi bi-droplet"></i>${safe(item.cepa || 'Consultar')}</span>
            <span><i class="bi bi-geo-alt"></i>${safe(item.region || 'Consultar')}</span>
            <span><i class="bi bi-thermometer-snow"></i>${safe(item.temperatura || 'Consultar')}</span>
          </div>
          <div class="company-carousel-actions">
            <button type="button" class="company-btn ghost" data-detail="${safe(item.id)}"><i class="bi bi-eye"></i> Ver detalle</button>
            <button type="button" class="company-btn accent" data-add-cart="${safe(item.id)}"><i class="bi bi-bag-plus"></i> Añadir</button>
          </div>
        </div>
      </article>
    `;
  }

  function position(){
    const cards = [...document.querySelectorAll('[data-company-carousel-card]')];
    const total = state.products.length;
    if(!cards.length || !total) return;

    const active = ((state.index % total) + total) % total;
    const compact = window.matchMedia('(max-width: 767.98px)').matches;
    const phone = window.matchMedia('(max-width: 575.98px)').matches;
    let activeCard = null;

    cards.forEach((el, i) => {
      const diff = offsetFor(i, active, total);
      const abs = Math.abs(diff);
      const dir = diff < 0 ? -1 : 1;
      el.classList.remove('is-active','is-side','is-hidden');

      // Limpiar posibles transforms de GSAP en la tarjeta. El movimiento del carrusel
      // vive exclusivamente aquí para evitar saltos, cortes y desplazamientos raros.
      el.style.removeProperty('rotate');
      el.style.removeProperty('scale');
      el.style.left = '50%';
      el.style.top = compact ? '18px' : '50%';

      if(diff === 0){
        activeCard = el;
        el.classList.add('is-active');
        el.style.zIndex = 12;
        el.style.opacity = '1';
        el.style.pointerEvents = 'auto';
        el.style.filter = 'none';
        el.style.transform = compact
          ? 'translateX(-50%) scale(1)'
          : 'translate(-50%, -50%) scale(1)';
        return;
      }

      if(abs === 1){
        el.classList.add('is-side');
        el.style.zIndex = compact ? 1 : 4;
        el.style.opacity = compact ? '0' : '.30';
        el.style.pointerEvents = compact ? 'none' : 'auto';
        el.style.filter = 'saturate(.58) brightness(.58) blur(.15px)';
        const x = compact ? 0 : (dir * Math.min(430, window.innerWidth * .24));
        el.style.transform = compact
          ? 'translateX(-50%) scale(.92)'
          : `translate(-50%, -50%) translateX(${x}px) scale(.72)`;
        return;
      }

      el.classList.add('is-hidden');
      el.style.zIndex = 1;
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
      el.style.filter = 'blur(2px)';
      const x = compact ? 0 : (dir * Math.min(680, window.innerWidth * .38));
      el.style.transform = compact
        ? 'translateX(-50%) scale(.86)'
        : `translate(-50%, -50%) translateX(${x}px) scale(.56)`;
    });

    const count = document.querySelector('[data-company-carousel-count]');
    if(count) count.textContent = `${String(active + 1).padStart(2,'0')} de ${String(total).padStart(2,'0')} vinos`;

    // En móvil la tarjeta no se centra en vertical: se ancla arriba y el contenedor
    // toma una altura real. Esto evita botellas cortadas, huecos enormes y solapes.
    const showcase = document.querySelector('[data-company-carousel]');
    const viewport = document.querySelector('.company-carousel-viewport');
    const track = document.querySelector('[data-company-carousel-track]');
    if(compact && activeCard && showcase && viewport && track){
      requestAnimationFrame(() => {
        const image = activeCard.querySelector('.company-carousel-image');
        const info = activeCard.querySelector('.company-carousel-info');
        const measured = Math.ceil(activeCard.scrollHeight || activeCard.getBoundingClientRect().height || 560);
        const min = phone ? 560 : 590;
        const max = phone ? 680 : 720;
        const nextHeight = Math.max(min, Math.min(max, measured + 42));
        [showcase, viewport, track].forEach(node => {
          node.style.minHeight = `${nextHeight}px`;
          node.style.height = `${nextHeight}px`;
        });
        if(image) image.style.maxHeight = phone ? '330px' : '360px';
        if(info) info.style.maxHeight = 'none';
      });
    }else if(showcase && viewport && track){
      [showcase, viewport, track].forEach(node => {
        node.style.removeProperty('height');
        node.style.removeProperty('min-height');
      });
    }

    if(typeof window.MaisonMotionRefresh === 'function'){
      window.MaisonMotionRefresh();
    }
  }

  function stopAuto(){
    if(state.timer){
      clearInterval(state.timer);
      state.timer = null;
    }
  }

  function startAuto(){
    stopAuto();
    if(state.products.length <= 1) return;
    if(document.hidden) return;
    state.timer = setInterval(() => move(1, true), AUTOPLAY_MS);
  }

  function move(step, fromAuto = false){
    const total = state.products.length;
    if(!total) return;
    state.index = (state.index + step + total) % total;
    position();
    if(!fromAuto) startAuto();
  }

  function render(){
    const track = document.querySelector('[data-company-carousel-track]');
    if(!track) return;

    state.products = Array.isArray(window.PRODUCTS) ? window.PRODUCTS : [];
    state.index = Math.min(state.index, Math.max(0, state.products.length - 1));

    if(!state.products.length){
      stopAuto();
      track.innerHTML = `<div class="company-empty"><strong>No hay vinos disponibles.</strong></div>`;
      return;
    }

    track.innerHTML = state.products.map(card).join('');
    requestAnimationFrame(() => {
      position();
      startAuto();
    });
  }

  function bind(){
    document.querySelector('[data-company-carousel-prev]')?.addEventListener('click', () => move(-1));
    document.querySelector('[data-company-carousel-next]')?.addEventListener('click', () => move(1));

    const carousel = document.querySelector('[data-company-carousel]');
    if(carousel){
      carousel.addEventListener('mouseenter', stopAuto);
      carousel.addEventListener('mouseleave', startAuto);
      carousel.addEventListener('focusin', stopAuto);
      carousel.addEventListener('focusout', startAuto);
      carousel.addEventListener('touchstart', stopAuto, { passive: true });
      carousel.addEventListener('touchend', () => setTimeout(startAuto, 1200), { passive: true });
    }

    document.addEventListener('visibilitychange', () => {
      document.hidden ? stopAuto() : startAuto();
    });

    document.addEventListener('click', event => {
      const cardEl = event.target.closest?.('[data-company-carousel-card]');
      if(!cardEl || event.target.closest('button,a')) return;
      const idx = Number(cardEl.dataset.index);
      if(Number.isFinite(idx)){
        if(idx === state.index){
          const product = state.products[idx];
          if(product) document.querySelector(`[data-detail="${CSS.escape(product.id)}"]`)?.click();
        }else{
          state.index = idx;
          position();
          startAuto();
        }
      }
    });

    document.addEventListener('keydown', event => {
      if(!event.target.closest?.('[data-company-carousel]')) return;
      if(event.key === 'ArrowLeft') move(-1);
      if(event.key === 'ArrowRight') move(1);
      if(event.key === 'Enter'){
        const active = state.products[state.index];
        if(active) document.querySelector(`[data-detail="${CSS.escape(active.id)}"]`)?.click();
      }
    });

    window.addEventListener('resize', position);
  }

  document.addEventListener('DOMContentLoaded', () => {
    bind();
    setTimeout(render, 120);
  });
  window.addEventListener('layout:ready', () => setTimeout(render, 80));
})();
