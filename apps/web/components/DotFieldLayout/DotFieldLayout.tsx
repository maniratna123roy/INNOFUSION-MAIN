'use client';

import React from 'react';
import DotField from '@/components/DotField';

interface DotFieldLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const DotFieldLayout = ({ children, className = '' }: DotFieldLayoutProps) => {
  return (
    <div
      style={{
        background: '#000000',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
        position: 'relative',
      }}
      className={className}
    >
      {/* DotField Background */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <DotField
          dotRadius={2.0}
          dotSpacing={18}
          bulgeStrength={60}
          glowRadius={180}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(200, 210, 220, 0.4)"
          gradientTo="rgba(220, 230, 240, 0.3)"
          glowColor="#1a1a2e"
        />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </div>
  );
};

export default DotFieldLayout;
