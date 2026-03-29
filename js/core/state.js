/**
 * state.js — Lightweight global state manager (localStorage-backed)
 *
 * Usage:
 *   State.set('user.weight', 80);
 *   State.get('user.weight');         // 80
 *   State.subscribe('user', cb);      // called whenever 'user' subtree changes
 */

const State = (() => {
  const STORAGE_KEY = 'apexgym_state';

  // ── Default shape ──────────────────────────────────────────────────────
  const DEFAULT_STATE = {
    user: {
      age: null,
      gender: null,
      weight: null,
      height: null,
      goal: null,
      activity: null,
      frequency: null,
      dietRestrictions: '',
      injuries: '',
    },
    body: {
      fatPct: 20,
      muscleMass: 50,
      upperBodyFat: 50,
      lowerBodyFat: 50,
      skinTone: '#f5c9a0',
    },
    avatar: {
      gender: 'male',
      snapshots: [],   // [{ date, body: {...} }]
    },
    plan: null,        // Generated plan object
    coach: null,       // Selected coach id
    progress: {
      workoutLog: [],  // [{ date, name, sets, notes }]
      badges: [],      // ['first-workout', 'week-streak', ...]
      weeklyChallenge: null,
    },
  };

  // ── Internal store ─────────────────────────────────────────────────────
  let _store = _load();
  const _listeners = {};  // key -> [callbacks]

  function _load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (_) {}
    return deepClone(DEFAULT_STATE);
  }

  function _save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(_store));
    } catch (_) {}
  }

  function _notify(topKey) {
    (_listeners[topKey] || []).forEach((cb) => cb(_store[topKey]));
    (_listeners['*'] || []).forEach((cb) => cb(_store));
  }

  // ── Resolve dot-path ──────────────────────────────────────────────────
  function _resolve(path) {
    const parts = path.split('.');
    const topKey = parts[0];
    let obj = _store;
    for (const part of parts) {
      if (obj == null) return { obj: undefined, parent: null, key: null, topKey };
      obj = obj[part];
    }
    const parent = parts.length > 1
      ? parts.slice(0, -1).reduce((o, k) => o[k], _store)
      : _store;
    return { obj, parent, key: parts[parts.length - 1], topKey };
  }

  // ── Public API ─────────────────────────────────────────────────────────
  return {
    /** Get value at dot-path */
    get(path) {
      return _resolve(path).obj;
    },

    /** Set value at dot-path */
    set(path, value) {
      const parts = path.split('.');
      const topKey = parts[0];
      let target = _store;
      for (let i = 0; i < parts.length - 1; i++) {
        if (target[parts[i]] == null) target[parts[i]] = {};
        target = target[parts[i]];
      }
      target[parts[parts.length - 1]] = value;
      _save();
      _notify(topKey);
    },

    /** Merge an object into a top-level key */
    merge(topKey, partial) {
      _store[topKey] = Object.assign({}, _store[topKey], partial);
      _save();
      _notify(topKey);
    },

    /** Subscribe to changes on a top-level key (or '*' for all) */
    subscribe(topKey, cb) {
      if (!_listeners[topKey]) _listeners[topKey] = [];
      _listeners[topKey].push(cb);
      // Immediately invoke with current value
      cb(topKey === '*' ? _store : _store[topKey]);
      return () => {
        _listeners[topKey] = _listeners[topKey].filter((fn) => fn !== cb);
      };
    },

    /** Reset entire state to defaults */
    reset() {
      _store = deepClone(DEFAULT_STATE);
      _save();
      _notify('*');
    },

    /** Dump full state (debug) */
    dump() {
      return deepClone(_store);
    },
  };
})();