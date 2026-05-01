import { useEffect, useRef } from 'react';
import * as THREE from 'three';
export function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const mountElement = mountRef.current;
    if (!mountElement) return;
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.002);
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountElement.appendChild(renderer.domElement);
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0x2563eb, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x1e3a5f, 2, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);
    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 400;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xc4d4e8,
      transparent: true,
      opacity: 0.3,
      blending: THREE.NormalBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    // Floating Geometric Objects
    const objects: THREE.Mesh[] = [];
    const material = new THREE.MeshStandardMaterial({
      color: 0x1e3a5f,
      metalness: 0.1,
      roughness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const solidMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.5,
      transparent: true,
      opacity: 0.15
    });
    // Icosahedron
    const geo1 = new THREE.IcosahedronGeometry(4, 0);
    const mesh1 = new THREE.Mesh(geo1, material);
    mesh1.position.set(-15, 5, -10);
    scene.add(mesh1);
    objects.push(mesh1);
    // TorusKnot
    const geo2 = new THREE.TorusKnotGeometry(3, 0.8, 100, 16);
    const mesh2 = new THREE.Mesh(geo2, solidMaterial);
    mesh2.position.set(18, -8, -15);
    scene.add(mesh2);
    objects.push(mesh2);
    // Octahedron
    const geo3 = new THREE.OctahedronGeometry(3, 0);
    const mesh3 = new THREE.Mesh(geo3, material);
    mesh3.position.set(5, 12, -20);
    scene.add(mesh3);
    objects.push(mesh3);
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);
    // Animation loop
    const clock = new THREE.Clock();
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      // Smooth camera movement
      camera.position.x += (mouseX * 0.005 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.005 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
      // Rotate objects
      objects.forEach((obj, index) => {
        obj.rotation.x += 0.001 * (index + 1);
        obj.rotation.y += 0.002 * (index + 1);
        obj.position.y += Math.sin(elapsedTime * 0.3 + index) * 0.01;
      });
      // Rotate particles
      particlesMesh.rotation.y = elapsedTime * 0.02;
      particlesMesh.rotation.x = elapsedTime * 0.01;
      renderer.render(scene, camera);
    };
    animate();
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      if (renderer.domElement.parentElement === mountElement) {
        mountElement.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);
  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none" />);


}
