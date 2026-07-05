/**
 * heroTransform.js — Minimal 3D hero viewer
 *
 * Loads a single GLB model (a standing person) into the hero section
 * and slowly spins it in place. No morphing, no phases, no transformation
 * logic — just a clean turntable view.
 */

const HeroTransform = (() => {
  let scene, camera, renderer, model;
  let container;
  const SPIN_SPEED = 0.006; // radians per frame, slow and steady

  function init(containerId, modelPath = "assets/models/anatomy.glb") {
    container = document.getElementById(containerId);
    if (!container) return;

    // ── Scene ──────────────────────────────────────────────────────────
    scene = new THREE.Scene();
    scene.background = null; // transparent, lets hero background show through

    // ── Camera ─────────────────────────────────────────────────────────
    const { clientWidth: w, clientHeight: h } = container;
    camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
    camera.position.set(0, 1.4, 4.2);

    // ── Renderer ───────────────────────────────────────────────────────
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // ── Lighting ───────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(3, 5, 4);
    scene.add(key);

    const rim = new THREE.DirectionalLight(0xe8ff00, 0.6); // brand lime accent
    rim.position.set(-4, 2, -3);
    scene.add(rim);

    const fill = new THREE.DirectionalLight(0x6a8cff, 0.25);
    fill.position.set(-2, 1, 3);
    scene.add(fill);

    // ── Load model ─────────────────────────────────────────────────────
    const loader = new THREE.GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        model = gltf.scene;
        _applyBrandColor(model);
        _frameModel(model);
        scene.add(model);
      },
      undefined,
      (err) => {
        console.error("HeroTransform: failed to load model", err);
      },
    );

    window.addEventListener("resize", debounce(_onResize, 150));
    renderer.setAnimationLoop(_animate);
  }

  /** Recolor every mesh in the model to the brand accent (#e8ff00). */
  function _applyBrandColor(root) {
    const brandColor = new THREE.Color(0xff3c3c);
    root.traverse((node) => {
      if (!node.isMesh) return;
      node.material = new THREE.MeshStandardMaterial({
        color: brandColor,
        roughness: 0.45,
        metalness: 1,
      });
    });
  }

  /** Center the model at the origin and scale it to a consistent height. */
  function _frameModel(root) {
    const box = new THREE.Box3().setFromObject(root);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    // Normalize height to ~2.2 units regardless of source scale
    const targetHeight = 2.2;
    const scale = targetHeight / (size.y || 1);
    root.scale.setScalar(scale);

    // Re-measure after scaling, then re-center on X/Z and sit on the floor (y=0)
    const box2 = new THREE.Box3().setFromObject(root);
    const center2 = new THREE.Vector3();
    box2.getCenter(center2);
    root.position.x -= center2.x;
    root.position.z -= center2.z;
    root.position.y -= box2.min.y;
  }

  function _animate() {
    if (model) model.rotation.y += SPIN_SPEED;
    renderer.render(scene, camera);
  }

  function _onResize() {
    if (!container || !renderer || !camera) return;
    const { clientWidth: w, clientHeight: h } = container;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }

  return { init };
})();
