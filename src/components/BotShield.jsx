import React, { useEffect } from 'react';

/**
 * BotShield: Detects headless browsers (Obscura, Puppeteer, Selenium)
 * and disables automated mass dumping shortcuts (Ctrl+S, Ctrl+U, Inspect shortcuts).
 */
const BotShield = () => {
  useEffect(() => {
    // 1. Detect Headless Chrome / Obscura automation flags
    const isHeadless = 
      navigator.webdriver ||
      window.callPhantom ||
      window._phantom ||
      window.__nightmare ||
      window.document.__selenium_unwrapped ||
      window.document.__webdriver_evaluate;

    if (isHeadless) {
      console.warn('⚠️ Automated browsing environment flagged.');
    }

    // 2. Prevent right-click context menu inspection on data
    const handleContextMenu = (e) => {
      // Allow inputs / textareas for normal typing
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      // Soft prevent on data elements
      if (e.target.closest('.secure-data-table') || e.target.closest('.card')) {
        e.preventDefault();
      }
    };

    // 3. Prevent mass dump shortcuts (Ctrl+S, Ctrl+U, F12)
    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && e.key === 's') || // Save page
        (e.ctrlKey && e.key === 'u')    // View source
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    // Invisible honeypot link in DOM for scrapers that crawl links
    <div style={{ display: 'none', position: 'absolute', left: '-9999px' }} aria-hidden="true">
      <a href="/api/honeypot" tabIndex="-1" rel="nofollow">Directory Download All</a>
      <a href="/api/colleges/all-dump" tabIndex="-1" rel="nofollow">Export Full Database CSV</a>
    </div>
  );
};

export default BotShield;
