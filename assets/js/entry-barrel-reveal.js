/* V52 - Revelado de imagen real de bodega bajo el cursor en el index */
(function(){
  const cards = [...document.querySelectorAll('.company-entry-card')];
  if(!cards.length) return;

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  cards.forEach(card => {
    let raf = 0;
    let last = null;

    function setFromEvent(event){
      last = event;
      if(raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        if(!last) return;
        const rect = card.getBoundingClientRect();
        const x = clamp(((last.clientX - rect.left) / rect.width) * 100, 0, 100);
        const y = clamp(((last.clientY - rect.top) / rect.height) * 100, 0, 100);
        card.style.setProperty('--entry-x', `${x}%`);
        card.style.setProperty('--entry-y', `${y}%`);
        card.style.setProperty('--barrel-x', `${x}%`);
        card.style.setProperty('--barrel-y', `${y}%`);
        card.style.setProperty('--entry-barrel-opacity', '1');
      });
    }

    card.addEventListener('pointerenter', event => {
      card.style.setProperty('--entry-barrel-opacity', '1');
      setFromEvent(event);
    });

    card.addEventListener('pointermove', setFromEvent);

    card.addEventListener('pointerleave', () => {
      last = null;
      card.style.setProperty('--entry-barrel-opacity', '0');
    });
  });
})();
