function centerHeroContent() {
    const hero = document.querySelector('.hero');
    const heroContent = document.getElementById('heroContent');
    const navbar = document.querySelector('.navbar');
    const topBar = document.querySelector('.top-bar');
  
    if (!hero || !heroContent) return;
  
    const heroHeight = hero.clientHeight;
    const contentHeight = heroContent.clientHeight;
    const navHeight = navbar ? navbar.clientHeight : 0;
    const topHeight = topBar ? topBar.clientHeight : 0;
  
    // Optical correction factor (tuned for large headings)
    const opticalOffset = 0.18;
  
    const top =
      (heroHeight - contentHeight) / 2 -
      (navHeight + topHeight) * opticalOffset;
  
    heroContent.style.top = `${Math.max(top, 0)}px`;
  }
  
  /* -------------------------
     Run on all critical events
  ------------------------- */
  
  // Initial load
  window.addEventListener('load', centerHeroContent);
  
  // Resize (fullscreen, minimize, split screen)
  window.addEventListener('resize', centerHeroContent);
  
  // Fonts load (VERY IMPORTANT for large text)
  if (document.fonts) {
    document.fonts.ready.then(centerHeroContent);
  }
  
  // Orientation change (mobile / tablet)
  window.addEventListener('orientationchange', centerHeroContent);
  