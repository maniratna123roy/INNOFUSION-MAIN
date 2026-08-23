import React, { memo } from 'react';

interface GradientWavesProps {
  [key: string]: any;
}

const GradientWaves = memo(({ ...rest }: GradientWavesProps) => {
  return (
    <svg
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
      {...rest}
    >
      <defs>
        <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.15)" />
          <stop offset="50%" stopColor="rgba(139, 92, 246, 0.1)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
        </linearGradient>
        <filter id="wave-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
        </filter>
      </defs>

      {/* Animated wave paths */}
      <path
        d="M0,200 Q300,150 600,200 T1200,200 L1200,600 L0,600 Z"
        fill="url(#wave-grad-1)"
        opacity="0.4"
        style={{
          animation: 'wave 8s ease-in-out infinite',
        }}
      />

      <path
        d="M0,250 Q300,200 600,250 T1200,250 L1200,600 L0,600 Z"
        fill="rgba(139, 92, 246, 0.08)"
        opacity="0.3"
        style={{
          animation: 'wave 10s ease-in-out infinite 1s',
        }}
      />

      <path
        d="M0,300 Q300,250 600,300 T1200,300 L1200,600 L0,600 Z"
        fill="rgba(99, 102, 241, 0.06)"
        opacity="0.2"
        style={{
          animation: 'wave 12s ease-in-out infinite 2s',
        }}
      />

      <style>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(50px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </svg>
  );
});

GradientWaves.displayName = 'GradientWaves';

export default GradientWaves;
