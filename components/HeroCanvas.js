// components/HeroCanvas.js
/* import { useRef, useEffect } from 'react';

export default function HeroCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    let animationId;
    let renderer, camera, scene, cube;

    (async () => {
      const THREE = await import('three');

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 3; // etwas weiter weg

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      // alpha: true => erlaubt transparenten Hintergrund
      renderer.setClearColor(0x000000, 0); // Schwarz, 0% Deckkraft => transparent
      renderer.setPixelRatio(window.devicePixelRatio);

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);

      containerRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    })();

    // Funktion, um Canvas-Größe anzupassen
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (containerRef.current) containerRef.current.innerHTML = '';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-80" />;
}
*/