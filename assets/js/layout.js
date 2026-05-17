const LAYOUT_TEMPLATES = {
  header: `<nav class="navbar navbar-expand-lg navbar-maison" id="mainNavbar">
  <div class="container">
    <a class="navbar-brand brand-mark" href="index.html" aria-label="Maison Wine Collection">
      <img src="assets/img/logo/logo-maison.svg" alt="Maison Wine Collection" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
      <span class="brand-symbol" style="display:none">M</span>
      <span class="brand-text">Maison Wine Collection</span>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Abrir menú">
      <i class="bi bi-list fs-2 text-wine"></i>
    </button>
    <div class="collapse navbar-collapse" id="mainMenu">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-1">
        <li class="nav-item"><a class="nav-link" data-page="inicio" href="index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" data-page="vitis" href="vitis.html">Vitis</a></li>
        <li class="nav-item"><a class="nav-link" data-page="maison" href="maison-blanche.html">Maison Blanche</a></li>
        <li class="nav-item"><a class="nav-link" data-page="nosotros" href="nosotros.html">Nosotros</a></li>
        <li class="nav-item"><a class="nav-link" data-page="contacto" href="contacto.html">Contáctanos</a></li>
      </ul>
    </div>
    <button class="theme-toggle" type="button" data-theme-toggle aria-label="Cambiar modo claro u oscuro">
      <i class="bi bi-sun"></i>
    </button>
  </div>
</nav>`,
  footer: `<footer class="footer-maison">
  <div class="container">
    <div class="row g-4 g-xl-5 align-items-start">
      <div class="col-12 col-lg-6 col-xl-4">
        <div class="d-flex align-items-center gap-3 mb-3">
          <img class="footer-logo" src="assets/img/logo/logo-maison.svg" alt="Maison Wine Collection">
          <div class="footer-brand">Maison Wine Collection</div>
        </div>
        <p>Catálogo premium de vinos internacionales para venta consultiva, pedidos personalizados y atención comercial por WhatsApp o correo.</p>
        <p class="mb-0"><strong>Beber con moderación.</strong><br>Prohibida su venta a menores de 18 años.</p>
      </div>

      <div class="col-6 col-lg-3 col-xl-2">
        <h6 class="footer-title">Colecciones</h6>
        <div class="d-grid gap-2">
          <a href="index.html">Inicio</a>
          <a href="vitis.html">Vitis</a>
          <a href="maison-blanche.html">Maison Blanche</a>
          <a href="catalogo-vitis.html">Catálogo Vitis</a>
          <a href="catalogo-maison-blanche.html">Catálogo Maison Blanche</a>
        </div>
      </div>

      <div class="col-6 col-lg-3 col-xl-2">
        <h6 class="footer-title">Ayuda y legal</h6>
        <div class="d-grid gap-2">
          <a href="preguntas-frecuentes.html">Preguntas frecuentes</a>
          <a href="politica-privacidad.html">Política de Privacidad</a>
          <a href="aviso-legal.html">Aviso legal</a>
        </div>
      </div>

      <div class="col-12 col-lg-6 col-xl-3">
        <h6 class="footer-title">Contacto</h6>
        <div class="footer-contact-list">
          <div class="footer-contact-item"><i class="bi bi-whatsapp text-gold"></i><a class="js-whatsapp-display" href="#">+58 414-2819931</a></div>
          <div class="footer-contact-item"><i class="bi bi-envelope text-gold"></i><a class="js-order-email" href="mailto:pedidos@maisonwinecollection.com">pedidos@maisonwinecollection.com</a></div>
          <div class="footer-contact-item"><i class="bi bi-clock text-gold"></i><span class="js-schedule">Lunes a sábado · 9:00 a 18:00</span></div>
        </div>
      </div>
    </div>

    <div class="legal-note mt-5 d-flex flex-column flex-md-row justify-content-between gap-2">
      <span>© <span class="js-year"></span> <span class="footer-brand-inline">Maison Wine Collection</span>. Todos los derechos reservados.</span>
      <span>Catálogo sin pasarela de pago. Pedido sujeto a confirmación de disponibilidad.</span>
    </div>
  </div>
</footer>`
};

function cartOffcanvasTemplate() {
  return `
  <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
    <div class="offcanvas-header bg-dark-maison">
      <div>
        <h5 class="offcanvas-title font-title fs-3 mb-0" id="cartOffcanvasLabel">Solicitud de pedido</h5>
        <small class="text-white-50">Sin pago online · confirmación por vendedor</small>
      </div>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
    </div>
    <div class="offcanvas-body">
      <div id="cartItems"></div>
      <button class="btn btn-outline-maison w-100 mb-4" type="button" id="clearCart"><i class="bi bi-trash3"></i> Vaciar carrito</button>
      <form id="cartForm" novalidate>
        <h6 class="fw-black mb-3">Datos del cliente</h6>
        <div class="mb-3"><label class="form-label fw-bold">Nombre completo*</label><input type="text" class="form-control" id="clientName" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Teléfono*</label><input type="tel" class="form-control" id="clientPhone" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Email*</label><input type="email" class="form-control" id="clientEmail" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Ciudad*</label><input type="text" class="form-control" id="clientCity" required></div>
        <div class="mb-3"><label class="form-label fw-bold">Dirección opcional</label><input type="text" class="form-control" id="clientAddress"></div>
        <div class="mb-3"><label class="form-label fw-bold">Comentarios adicionales</label><textarea class="form-control" id="clientComments" rows="3" placeholder="Horario de entrega, referencias, presupuesto..."></textarea></div>
        <div class="form-check mb-3">
          <input class="form-check-input" type="checkbox" value="" id="clientAccept" required>
          <label class="form-check-label" for="clientAccept">Acepto ser contactado para confirmar disponibilidad y entrega.</label>
          <div class="invalid-feedback">Debes aceptar el contacto para confirmar el pedido.</div>
        </div>
        <div class="alert alert-warning d-none" id="cartAlert"></div>
        <div class="d-grid gap-2">
          <button class="btn btn-maison" type="button" id="sendWhatsapp"><i class="bi bi-whatsapp"></i> Enviar pedido por WhatsApp</button>
          <button class="btn btn-outline-maison" type="button" id="sendEmail"><i class="bi bi-envelope"></i> Enviar pedido por correo</button>
        </div>
        <small class="d-block mt-3 text-muted">Para envío real automático se recomienda integrar EmailJS, Formspree, PHP, Node.js o un backend propio.</small>
      </form>
    </div>
  </div>`;
}

function productDetailModalTemplate() {
  return `
  <div class="modal fade" id="productModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered product-detail-modal-dialog">
      <div class="modal-content border-0 rounded-maison overflow-hidden">
        <div class="modal-header bg-dark-maison">
          <h5 class="modal-title font-title fs-3" id="productModalTitle">Detalle del producto</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body product-detail-modal-body" id="productModalBody"></div>
      </div>
    </div>
  </div>`;
}

function floatingActionsTemplate() {
  return `
    <div class="floating-actions">
      <button class="float-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-label="Carrito"><i class="bi bi-bag fs-4"></i><span class="cart-count js-cart-count">0</span></button>
    </div>`;
}

async function loadComponent(name, fallback) {
  if (location.protocol === 'file:') return fallback;
  try {
    const res = await fetch(`components/${name}.html`, {cache:'no-store'});
    if (!res.ok) throw new Error('No se pudo cargar ' + name);
    return await res.text();
  } catch (err) {
    console.warn('Usando fallback de layout para', name, err);
    return fallback;
  }
}


function injectMaisonHotfixStyles() {
  if (document.getElementById('maison-hotfix-styles')) return;
  const style = document.createElement('style');
  style.id = 'maison-hotfix-styles';
  style.textContent = `
    .footer-maison .footer-contact-list{display:grid;gap:.78rem;min-width:0;}
    .footer-maison .footer-contact-item{display:grid;grid-template-columns:22px minmax(0,1fr);gap:.55rem;align-items:start;line-height:1.45;min-width:0;}
    .footer-maison .footer-contact-item i{font-size:1rem;line-height:1.45;margin-top:.08rem;}
    .footer-maison .footer-contact-item a,.footer-maison .footer-contact-item span{min-width:0;overflow-wrap:anywhere;word-break:normal;text-decoration:none;}
    .footer-maison .social-links{display:flex;flex-wrap:wrap;gap:.72rem;align-items:center;}
    .footer-maison .social-links a{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:999px;text-decoration:none;line-height:1;}
    .footer-maison .social-links i{font-size:1.08rem;line-height:1;}
    .footer-maison code{white-space:normal;word-break:break-word;}
    .cart-feedback{position:fixed;right:20px;bottom:96px;z-index:1085;background:#fff;color:#1b1b1b;border-radius:999px;padding:.85rem 1rem;box-shadow:0 18px 45px rgba(0,0,0,.18);opacity:0;transform:translateY(10px);transition:.22s ease;max-width:min(420px,calc(100vw - 40px));font-weight:700;}
    .cart-feedback.show{opacity:1;transform:translateY(0);}
    .float-cart{cursor:pointer;}
    .btn-wine.added,.btn-maison.added{filter:brightness(1.06);}
    @media (max-width: 991.98px){.footer-maison .footer-brand{font-size:1.35rem}.footer-maison .social-links a{width:40px;height:40px}.cart-feedback{left:16px;right:16px;bottom:92px;border-radius:18px;}}
  `;
  document.head.appendChild(style);
}

function forceNavbarVisible() {
  const nav = document.getElementById('mainNavbar');
  if (!nav) return;
  nav.style.opacity = '1';
  nav.style.visibility = 'visible';
  nav.style.pointerEvents = 'auto';
}

async function initLayout() {
  const headerTarget = document.getElementById('site-header');
  const footerTarget = document.getElementById('site-footer');
  injectMaisonHotfixStyles();
  if (headerTarget) headerTarget.innerHTML = await loadComponent('header', LAYOUT_TEMPLATES.header);
  if (footerTarget) footerTarget.innerHTML = await loadComponent('footer', LAYOUT_TEMPLATES.footer);
  if (!document.getElementById('cartOffcanvas')) document.body.insertAdjacentHTML('beforeend', cartOffcanvasTemplate());
  if (!document.getElementById('productModal')) document.body.insertAdjacentHTML('beforeend', productDetailModalTemplate());
  if (!document.querySelector('.floating-actions')) document.body.insertAdjacentHTML('beforeend', floatingActionsTemplate());
  applyLayoutConfig();
  setActiveNav();
  forceNavbarVisible();
  requestAnimationFrame(forceNavbarVisible);
  window.dispatchEvent(new Event('layout:ready'));
}

function applyLayoutConfig() {
  document.querySelectorAll('.brand-text,.footer-brand,.footer-brand-inline').forEach(el => el.textContent = CONFIG.brandName);
  document.querySelectorAll('img[src="assets/img/logo/logo-maison.svg"], .brand-mark img, .footer-logo').forEach(img => { img.src = CONFIG.logoPath; img.alt = CONFIG.brandName; });
  document.querySelectorAll('.js-whatsapp-display').forEach(a => {
    a.textContent = CONFIG.whatsappDisplay;
    a.href = `https://wa.me/${CONFIG.whatsappNumber}`;
    a.target = '_blank';
    a.rel = 'noopener';
  });
  document.querySelectorAll('.js-order-email').forEach(a => {
    a.textContent = CONFIG.orderEmail;
    a.href = `mailto:${CONFIG.orderEmail}`;
  });

  const socialMap = {
    '.js-social-instagram': CONFIG.social?.instagram,
    '.js-social-tiktok': CONFIG.social?.tiktok,
    '.js-social-facebook': CONFIG.social?.facebook,
    '.js-social-linkedin': CONFIG.social?.linkedin
  };
  Object.entries(socialMap).forEach(([selector, url]) => {
    document.querySelectorAll(selector).forEach(a => {
      a.href = url || '#';
    });
  });
  document.querySelectorAll('.js-schedule').forEach(el => el.textContent = CONFIG.schedule);
  document.querySelectorAll('.js-year').forEach(el => el.textContent = new Date().getFullYear());
}

function setActiveNav() {
  const page = document.body.dataset.page || 'inicio';
  document.querySelectorAll('[data-page]').forEach(link => link.classList.toggle('active', link.dataset.page === page));
}

window.cartOffcanvasTemplate = cartOffcanvasTemplate;
window.floatingActionsTemplate = floatingActionsTemplate;
document.addEventListener('DOMContentLoaded', initLayout);
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNavbar');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 18);
    forceNavbarVisible();
  }
});
