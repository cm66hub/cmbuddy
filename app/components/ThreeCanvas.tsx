"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x030712, 0.025);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 8);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 15, 60);
    emeraldLight.position.set(5, 5, 5);
    scene.add(emeraldLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 12, 60);
    cyanLight.position.set(-5, -3, 3);
    scene.add(cyanLight);

    // Central 3D Symbol Group
    const logoGroup = new THREE.Group();

    const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.35, 120, 16);
    const knotMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x052e16,
      emissiveIntensity: 0.5,
    });
    const knotMesh = new THREE.Mesh(knotGeo, knotMat);
    logoGroup.add(knotMesh);

    const ringGeo = new THREE.TorusGeometry(2.3, 0.04, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x083344,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    logoGroup.add(ringMesh);

    scene.add(logoGroup);

    // Floating 3D Geometries spread across height depth
    const floatersGroup = new THREE.Group();
    const geometries = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.IcosahedronGeometry(0.4),
      new THREE.TorusGeometry(0.4, 0.1, 16, 32),
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x10b981, metalness: 0.7, roughness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, metalness: 0.8, roughness: 0.2 }),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.6, roughness: 0.4 }),
    ];

    const floaters: { mesh: THREE.Mesh; rotSpeed: { x: number; y: number }; floatSpeed: number; initialY: number }[] = [];

    for (let i = 0; i < 45; i++) {
      const geo = geometries[Math.floor(Math.random() * geometries.length)];
      const mat = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geo, mat);

      mesh.position.set(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 35,
        (Math.random() - 0.5) * 15
      );

      const scale = 0.4 + Math.random() * 0.6;
      mesh.scale.set(scale, scale, scale);

      floatersGroup.add(mesh);
      floaters.push({
        mesh,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: 0.5 + Math.random() * 1.5,
        initialY: mesh.position.y,
      });
    }
    scene.add(floatersGroup);

    // Background Particle Field covering whole view
    const particleCount = 2000;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 40;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 30;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x34d399,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Scroll Camera Control
    let scrollY = 0;
    let targetScrollY = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation following scroll height
      scrollY += (targetScrollY - scrollY) * 0.05;
      const scrollProgress = scrollY / (document.body.scrollHeight - window.innerHeight || 1);

      camera.position.x = Math.sin(scrollProgress * Math.PI * 2) * 2.5;
      camera.position.y = -scrollProgress * 16 + Math.cos(elapsedTime * 0.5) * 0.2;
      camera.position.z = 8 + Math.cos(scrollProgress * Math.PI) * 2.5;
      camera.rotation.z = Math.sin(scrollProgress * Math.PI) * 0.15;

      // Rotate central 3D logo
      logoGroup.rotation.y = elapsedTime * 0.4;
      logoGroup.rotation.x = elapsedTime * 0.2;
      ringMesh.rotation.x = elapsedTime * 0.6;

      // Animate floating items
      floaters.forEach((f) => {
        f.mesh.rotation.x += f.rotSpeed.x;
        f.mesh.rotation.y += f.rotSpeed.y;
        f.mesh.position.y = f.initialY + Math.sin(elapsedTime * f.floatSpeed) * 0.35;
      });

      // Animate particle field
      particles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}