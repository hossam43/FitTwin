/**
 * helpers.js — Shared utility functions
 */

/** Query selector shorthand */
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

/** Debounce a function */
function debounce(fn, delay = 200) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

/** Clamp a number between min and max */
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

/** Format a date as "Mar 29, 2026" */
function formatDate(date = new Date()) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Linear interpolation */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/** Map a value from one range to another */
function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/** Generate a random ID */
function uid() {
  return Math.random().toString(36).slice(2, 9);
}

/** Show / hide element with class */
function show(el) { el && el.classList.remove('hidden'); }
function hide(el) { el && el.classList.add('hidden'); }
function toggle(el) { el && el.classList.toggle('hidden'); }

/** Animate elements into view on scroll */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  $$('[data-animate]').forEach((el) => observer.observe(el));
}

/** Validate that a form input has a value */
function isNotEmpty(value) {
  return value !== null && value !== undefined && String(value).trim() !== '';
}

/** Deep clone an object (JSON-safe) */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}