import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let targetRotX = 0;
    let targetRotY = 0;
    let rotX = 0;
    let rotY = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const halfW = width / 2;
      const halfH = height / 2;
      targetRotY = ((e.clientX - halfW) / halfW) * 0.3;
      targetRotX = -((e.clientY - halfH) / halfH) * 0.3;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const halfW = width / 2;
        const halfH = height / 2;
        targetRotY = ((e.touches[0].clientX - halfW) / halfW) * 0.2;
        targetRotX = -((e.touches[0].clientY - halfH) / halfH) * 0.2;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Create 3D points in bright, vibrant, cheerful hues
    const pointsCount = 75;
    const points: Point3D[] = [];
    const colors = ['#4f46e5', '#0284c7', '#7c3aed', '#059669', '#2563eb', '#e11d48'];

    for (let i = 0; i < pointsCount; i++) {
      points.push({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 1200,
        z: (Math.random() - 0.5) * 1000,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const fov = 500;

    const render = () => {
      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      const cx = width / 2;
      const cy = height / 2;

      // Pure Bright Canvas Background
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(cx, cy, 50, cx, cy, Math.max(width, height) * 0.8);
      grad.addColorStop(0, 'rgba(238, 242, 255, 0.7)');
      grad.addColorStop(0.5, 'rgba(240, 249, 255, 0.5)');
      grad.addColorStop(1, 'rgba(248, 250, 252, 0.9)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const projected: { px: number; py: number; scale: number; p: Point3D }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (Math.abs(p.x) > 600) p.vx *= -1;
        if (Math.abs(p.y) > 600) p.vy *= -1;
        if (Math.abs(p.z) > 500) p.vz *= -1;

        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;

        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX + 600;

        if (z2 > 10) {
          const scale = fov / z2;
          const px = cx + x1 * scale;
          const py = cy + y1 * scale;
          projected.push({ px, py, scale, p });
        }
      }

      // Constellation lines in soft pastel indigo
      ctx.lineWidth = 0.85;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.22;
            ctx.strokeStyle = `rgba(79, 70, 229, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.stroke();
          }
        }
      }

      // Draw particles with soft glow rings
      for (let i = 0; i < projected.length; i++) {
        const { px, py, scale, p } = projected[i];
        const r = Math.max(0.6, p.size * scale);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.15;
        ctx.beginPath();
        ctx.arc(px, py, r * 2.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
