// 3d-hero.js
// Three.js roulette wheel placeholder with basic animation

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.153.0/build/three.module.js';

let scene, camera, renderer, wheel, animateId;
let started = false;

function init3DRoulette() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 1.5, 5);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Lights
  const ambient = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambient);
  const spot = new THREE.SpotLight(0xffd700, 1.2, 20, Math.PI / 4, 0.5, 1);
  spot.position.set(0, 5, 5);
  scene.add(spot);

  // Simple roulette wheel (replace with real model)
  const wheelGeo = new THREE.CylinderGeometry(2, 2, 0.5, 64, 1, false);
  const wheelMat = new THREE.MeshPhysicalMaterial({ color: 0xFFD700, metalness: 0.8, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 });
  wheel = new THREE.Mesh(wheelGeo, wheelMat);
  wheel.position.y = 0.5;
  scene.add(wheel);

  // Glow effect
  const glowGeo = new THREE.RingGeometry(2.1, 2.5, 64);
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xFFD700, transparent: true, opacity: 0.18, side: THREE.DoubleSide });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.position.y = 0.51;
  glow.rotation.x = -Math.PI / 2;
  scene.add(glow);

  window.addEventListener('resize', onWindowResize);

  // Start/stop animation based on hero section visibility
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startAnimation();
      } else {
        stopAnimation();
      }
    });
  }, { threshold: 0.2 });
  observer.observe(canvas.parentElement);
}

function animate() {
  if (!started) return;
  if (wheel) wheel.rotation.y += 0.008;
  renderer.render(scene, camera);
  animateId = requestAnimationFrame(animate);
}

function startAnimation() {
  if (!started) {
    started = true;
    animate();
  }
}

function stopAnimation() {
  started = false;
  if (animateId) cancelAnimationFrame(animateId);
  animateId = null;
}

function onWindowResize() {
  if (!renderer || !camera) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.init3DRoulette = init3DRoulette;
