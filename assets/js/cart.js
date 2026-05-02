/* =========================================================
   CARRITO GLOBAL + ENVÍO POR WHATSAPP/CORREO
   FIX V2: robusto contra timing de layout, eventos duplicados
   y carga local/servidor.
========================================================= */
let cart = [];
let cartLoaded = false;
let cartEventsBound = false;
let lastAddSignature = '';
let lastAddTime = 0;

const allItems = () => [...(window.PRODUCTS || []), ...(window.PACKS || [])];
const findItem = id => allItems().find(item => item.id === id);
const money = value => {
  const currency = window.CONFIG?.currency || '€';
  if (value === null || value === undefined || value === '' || value === 'Consultar precio') return 'Consultar';
  const number = Number(value);
  return Number.isFinite(number) ? `${number.toFixed(2)} ${currency}` : 'Consultar';
};

function getStorageKey(){
  return window.CONFIG?.storageKeys?.cart || 'maisonWineCart';
}

function loadCart(){
  try {
    const raw = localStorage.getItem(getStorageKey());
    const data = raw ? JSON.parse(raw) : [];
    return Array.isArray(data) ? data.filter(row => row && row.id && Number(row.qty) > 0) : [];
  } catch (err) {
    console.warn('No se pudo leer el carrito desde localStorage:', err);
    return [];
  }
}

function loadCartOnce(){
  if (cartLoaded) return;
  cartLoaded = true;
  cart = loadCart();
}

function saveCart(){
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(cart));
  } catch (err) {
    console.warn('No se pudo guardar el carrito en localStorage:', err);
  }
}

function cartQty(){
  return cart.reduce((sum, item) => sum + Number(item.qty || 0), 0);
}

function cartTotal(){
  return cart.reduce((sum, row) => {
    const item = findItem(row.id);
    const price = item && typeof item.precio === 'number' ? item.precio : 0;
    return sum + price * Number(row.qty || 0);
  }, 0);
}

function cartOffcanvasFallbackTemplate(){
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
      <div class="cart-total d-flex justify-content-between align-items-center">
        <span class="fw-bold">Total estimado</span>
        <strong class="fs-4" id="cartTotal">0 €</strong>
      </div>
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

function floatingActionsFallbackTemplate(){
  return `
    <div class="floating-actions">
      <button class="float-cart" type="button" aria-label="Carrito"><i class="bi bi-bag fs-4"></i><span class="cart-count js-cart-count">0</span></button>
    </div>`;
}

function ensureCartDom(){
  if (!document.getElementById('cartOffcanvas')) {
    const template = typeof window.cartOffcanvasTemplate === 'function'
      ? window.cartOffcanvasTemplate()
      : cartOffcanvasFallbackTemplate();
    document.body.insertAdjacentHTML('beforeend', template);
  }

  if (!document.querySelector('.floating-actions')) {
    const template = typeof window.floatingActionsTemplate === 'function'
      ? window.floatingActionsTemplate()
      : floatingActionsFallbackTemplate();
    document.body.insertAdjacentHTML('beforeend', template);
  }

}

function updateCartCounters(){
  ensureCartDom();
  document.querySelectorAll('.js-cart-count').forEach(el => {
    el.textContent = cartQty();
    el.classList.add('pulse');
    clearTimeout(el._pulseTimer);
    el._pulseTimer = setTimeout(() => el.classList.remove('pulse'), 220);
  });
}

function showCartFeedback(item){
  if(!item) return;
  let box = document.querySelector('.cart-feedback');
  if(!box){
    box = document.createElement('div');
    box.className = 'cart-feedback';
    document.body.appendChild(box);
  }
  box.innerHTML = `<i class="bi bi-check-circle-fill text-success me-2"></i>${item.nombre} añadido al carrito.`;
  requestAnimationFrame(() => box.classList.add('show'));
  clearTimeout(box._timer);
  box._timer = setTimeout(() => box.classList.remove('show'), 2100);
}

function renderCart(){
  ensureCartDom();
  loadCartOnce();
  const target = document.getElementById('cartItems');
  const totalTarget = document.getElementById('cartTotal');
  if(!target || !totalTarget) return;

  if(cart.length === 0){
    target.innerHTML = `<div class="empty-state"><i class="bi bi-bag fs-1 d-block mb-2"></i><strong>Tu carrito está vacío</strong><p class="mb-0">Añade vinos del catálogo para preparar la solicitud.</p></div>`;
    totalTarget.textContent = `0 ${window.CONFIG?.currency || '€'}`;
    return;
  }

  target.innerHTML = cart.map(row => {
    const item = findItem(row.id);
    if(!item) return '';
    const subtotal = typeof item.precio === 'number' ? item.precio * Number(row.qty || 0) : 0;
    return `<div class="cart-item">
      <img src="${item.imagen}" alt="${item.nombre}" onerror="this.src='${window.CONFIG?.placeholderImage || ''}'">
      <div>
        <div class="fw-black">${item.nombre}</div>
        <small class="text-muted">${item.bodega || 'Maison Wine Collection'}</small>
        <div class="mt-2 qty-control">
          <button type="button" data-cart-minus="${item.id}" aria-label="Restar unidad">−</button>
          <strong>${row.qty}</strong>
          <button type="button" data-cart-plus="${item.id}" aria-label="Sumar unidad">+</button>
        </div>
      </div>
      <div class="text-end">
        <strong>${subtotal ? money(subtotal) : 'Consultar'}</strong><br>
        <button class="btn btn-sm text-danger p-0 mt-2" type="button" data-cart-remove="${item.id}">Eliminar</button>
      </div>
    </div>`;
  }).join('');

  totalTarget.textContent = money(cartTotal());
}

function addToCart(id, qty = 1){
  loadCartOnce();
  ensureCartDom();

  const item = findItem(id);
  if(!item) {
    console.warn('Producto no encontrado para añadir al carrito:', id);
    return false;
  }

  const amount = Number(qty) > 0 ? Number(qty) : 1;
  const existing = cart.find(row => row.id === id);
  if(existing) existing.qty = Number(existing.qty || 0) + amount;
  else cart.push({id, qty: amount});

  saveCart();
  renderCart();
  updateCartCounters();
  showCartFeedback(item);
  return true;
}

function animateAddButton(trigger){
  if(!trigger) return;
  const original = trigger.dataset.originalText || trigger.innerHTML;
  trigger.dataset.originalText = original;
  trigger.classList.add('added');
  trigger.innerHTML = '<i class="bi bi-check2-circle"></i> Añadido';
  clearTimeout(trigger._cartTimer);
  trigger._cartTimer = setTimeout(() => {
    trigger.classList.remove('added');
    trigger.innerHTML = trigger.dataset.originalText || original;
  }, 1200);
}

function handleAddCartClick(event, trigger){
  if(event) event.preventDefault();
  const btn = trigger || event?.target?.closest?.('[data-add-cart]');
  const id = btn?.dataset?.addCart || btn?.getAttribute?.('data-add-cart');
  if(!id) return false;

  const now = Date.now();
  const signature = `${id}:${btn ? btn.outerHTML.slice(0, 80) : ''}`;
  if(signature === lastAddSignature && now - lastAddTime < 260) return false;
  lastAddSignature = signature;
  lastAddTime = now;

  if(addToCart(id)) {
    animateAddButton(btn);
  }
  return false;
}
window.handleAddCartClick = handleAddCartClick;

function changeQty(id, delta){
  loadCartOnce();
  const row = cart.find(item => item.id === id);
  if(!row) return;
  row.qty = Number(row.qty || 0) + Number(delta || 0);
  if(row.qty <= 0) cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  updateCartCounters();
}

function removeFromCart(id){
  loadCartOnce();
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  updateCartCounters();
}

function clearCart(){
  loadCartOnce();
  cart = [];
  saveCart();
  renderCart();
  updateCartCounters();
}

function validateOrder(){
  renderCart();
  const form = document.getElementById('cartForm');
  const alert = document.getElementById('cartAlert');
  if(!form || !alert) return false;
  alert.classList.add('d-none');

  if(cart.length === 0){
    alert.textContent = 'El carrito no puede estar vacío.';
    alert.classList.remove('d-none');
    return false;
  }

  if(!form.checkValidity()){
    form.classList.add('was-validated');
    alert.textContent = 'Completa los campos obligatorios antes de enviar.';
    alert.classList.remove('d-none');
    return false;
  }
  return true;
}

function buildOrderMessage(){
  const brand = window.CONFIG?.brandName || 'Maison Wine Collection';
  const get = id => (document.getElementById(id)?.value || '').trim() || 'No especificado';
  const lines = [];
  lines.push(`Hola, quiero realizar un pedido desde ${brand}.`, '');
  lines.push('DATOS DEL CLIENTE:');
  lines.push(`Nombre: ${get('clientName')}`);
  lines.push(`Teléfono: ${get('clientPhone')}`);
  lines.push(`Email: ${get('clientEmail')}`);
  lines.push(`Ciudad: ${get('clientCity')}`);
  lines.push(`Dirección: ${get('clientAddress')}`);
  lines.push(`Comentarios: ${get('clientComments')}`, '');
  lines.push('PEDIDO:');
  cart.forEach((row, idx) => {
    const item = findItem(row.id);
    if(!item) return;
    lines.push(`${idx + 1}. ${item.nombre} - ${item.bodega || 'Maison'} - Cantidad: ${row.qty} - Precio: ${money(item.precio)}`);
  });
  lines.push('', `TOTAL: ${money(cartTotal())}`, '');
  lines.push('Quedo atento/a para confirmar disponibilidad, precio final y entrega.');
  return lines.join('\n');
}

function sendOrderWhatsapp(){
  if(!validateOrder()) return;
  const number = window.CONFIG?.whatsappNumber || '584142819931';
  const msg = encodeURIComponent(buildOrderMessage());
  window.open(`https://wa.me/${number}?text=${msg}`, '_blank', 'noopener');
}

function sendOrderEmail(){
  if(!validateOrder()) return;
  const brand = window.CONFIG?.brandName || 'Maison Wine Collection';
  const email = window.CONFIG?.orderEmail || 'pedidos@maisonwinecollection.com';
  const subject = encodeURIComponent(`Nuevo pedido web - ${brand}`);
  const body = encodeURIComponent(buildOrderMessage());
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
}

function openCart(){
  ensureCartDom();
  renderCart();
  const el = document.getElementById('cartOffcanvas');
  if(!el) return;

  if(window.bootstrap?.Offcanvas){
    window.bootstrap.Offcanvas.getOrCreateInstance(el).show();
    return;
  }

  // Fallback por si Bootstrap JS no cargó.
  el.classList.add('show');
  el.style.visibility = 'visible';
  el.style.transform = 'none';
  document.body.classList.add('offcanvas-backdrop-fallback-active');
}

function closeCart(){
  const el = document.getElementById('cartOffcanvas');
  if(!el) return;

  if(window.bootstrap?.Offcanvas){
    window.bootstrap.Offcanvas.getOrCreateInstance(el).hide();
    return;
  }

  el.classList.remove('show');
  el.style.visibility = '';
  el.style.transform = '';
  document.body.classList.remove('offcanvas-backdrop-fallback-active');
}

function bindCartEvents(){
  if(cartEventsBound) return;
  cartEventsBound = true;

  document.addEventListener('click', event => {
    const addBtn = event.target.closest?.('[data-add-cart]');
    if(addBtn){
      handleAddCartClick(event, addBtn);
      return;
    }

    const plus = event.target.closest?.('[data-cart-plus]');
    if(plus){
      event.preventDefault();
      changeQty(plus.dataset.cartPlus, 1);
      return;
    }

    const minus = event.target.closest?.('[data-cart-minus]');
    if(minus){
      event.preventDefault();
      changeQty(minus.dataset.cartMinus, -1);
      return;
    }

    const remove = event.target.closest?.('[data-cart-remove]');
    if(remove){
      event.preventDefault();
      removeFromCart(remove.dataset.cartRemove);
      return;
    }

    if(event.target.closest?.('#clearCart')){
      event.preventDefault();
      clearCart();
      return;
    }

    if(event.target.closest?.('#sendWhatsapp')){
      event.preventDefault();
      sendOrderWhatsapp();
      return;
    }

    if(event.target.closest?.('#sendEmail')){
      event.preventDefault();
      sendOrderEmail();
      return;
    }

    if(event.target.closest?.('.float-cart')){
      event.preventDefault();
      openCart();
      return;
    }

    if(event.target.closest?.('[data-bs-dismiss="offcanvas"]')){
      closeCart();
    }
  });
}

function initCart(){
  loadCartOnce();
  ensureCartDom();
  bindCartEvents();
  renderCart();
  updateCartCounters();
}

window.MaisonCart = {
  add: addToCart,
  handleAddCartClick,
  changeQty,
  remove: removeFromCart,
  clear: clearCart,
  render: renderCart,
  total: cartTotal,
  qty: cartQty,
  open: openCart,
  close: closeCart,
  init: initCart
};
window.addToCart = addToCart;
window.openCart = openCart;

window.addEventListener('layout:ready', initCart);
document.addEventListener('DOMContentLoaded', initCart);
if(document.readyState !== 'loading') initCart();
setTimeout(initCart, 300);
setTimeout(initCart, 1000);
