/**
 * router.js — Minimal hash-based router (optional, for SPA-style use later)
 *
 * Usage:
 *   Router.on('/coaches', () => renderCoaches());
 *   Router.go('/coaches');
 */

const Router = (() => {
  const _routes = {};

  function _match() {
    const hash = window.location.hash.slice(1) || '/';
    const handler = _routes[hash];
    if (handler) handler();
  }

  window.addEventListener('hashchange', _match);
  window.addEventListener('DOMContentLoaded', _match);

  return {
    on(path, handler) {
      _routes[path] = handler;
    },
    go(path) {
      window.location.hash = path;
    },
  };
})();