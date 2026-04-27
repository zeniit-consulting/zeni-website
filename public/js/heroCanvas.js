import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.183.1/build/three.module.js';

export function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const wrapper = document.getElementById('hero-canvas-wrapper');
  if (!canvas || !wrapper) return;

  const width = wrapper.offsetWidth;
  const height = wrapper.offsetHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const particlesCount = 200;
  const posArray = new Float32Array(particlesCount * 3);
  const colorArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    posArray[i * 3] = (Math.random() - 0.5) * 16;
    posArray[i * 3 + 1] = (Math.random() - 0.5) * 12;
    posArray[i * 3 + 2] = (Math.random() - 0.5) * 10;

    const colorChoice = Math.random();
    if (colorChoice < 0.6) {
      colorArray[i * 3] = 1;
      colorArray[i * 3 + 1] = 1;
      colorArray[i * 3 + 2] = 1;
    } else if (colorChoice < 0.8) {
      colorArray[i * 3] = 0.4;
      colorArray[i * 3 + 1] = 0.6;
      colorArray[i * 3 + 2] = 1;
    } else {
      colorArray[i * 3] = 0.7;
      colorArray[i * 3 + 1] = 0.5;
      colorArray[i * 3 + 2] = 1;
    }
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.04,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  let time = 0;
  function animate() {
    requestAnimationFrame(animate);
    time += 0.0015;
    particlesMesh.rotation.y = time * 0.15;
    particlesMesh.rotation.x = Math.sin(time * 0.3) * 0.08;
    renderer.render(scene, camera);
  }
  animate();

  const handleResize = () => {
    const w = wrapper.offsetWidth;
    const h = wrapper.offsetHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', handleResize);
}
