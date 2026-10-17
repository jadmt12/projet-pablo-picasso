import React, { useEffect, useState } from 'react';

interface LaserPointerProps {
  isActive: boolean;
}

export const LaserPointer: React.FC<LaserPointerProps> = ({ isActive }) => {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!isActive) {
      setPos(null);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isActive]);

  if (!isActive || !pos) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer halo */}
      <div className="w-8 h-8 rounded-full bg-red-500/25 animate-ping absolute -inset-2" />
      {/* Middle bright glow */}
      <div className="w-5 h-5 rounded-full bg-red-500/50 blur-[2px] absolute -inset-0.5" />
      {/* Core laser dot */}
      <div className="w-4 h-4 rounded-full bg-red-400 border-2 border-white shadow-[0_0_15px_#ef4444]" />
    </div>
  );
};
