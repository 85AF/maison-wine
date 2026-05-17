/* V37 - Modo claro / oscuro */
(function(){
  const KEY = 'maisonThemeMode';
  function preferred(){
    try{return localStorage.getItem(KEY) || 'dark';}catch(e){return 'dark';}
  }
  function setMode(mode){
    const value = mode === 'light' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', value);
    document.body?.classList.toggle('theme-light', value === 'light');
    document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
      btn.innerHTML = value === 'light' ? '<i class="bi bi-moon-stars"></i>' : '<i class="bi bi-sun"></i>';
      btn.setAttribute('aria-label', value === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
      btn.title = value === 'light' ? 'Modo oscuro' : 'Modo claro';
    });
    try{localStorage.setItem(KEY, value);}catch(e){}
  }
  setMode(preferred());
  document.addEventListener('DOMContentLoaded', () => setMode(preferred()));
  window.addEventListener('layout:ready', () => setMode(preferred()));
  document.addEventListener('click', event => {
    const btn = event.target.closest?.('[data-theme-toggle]');
    if(!btn) return;
    event.preventDefault();
    const current = document.documentElement.getAttribute('data-theme') || preferred();
    setMode(current === 'light' ? 'dark' : 'light');
  });
})();
