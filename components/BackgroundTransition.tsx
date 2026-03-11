'use client';

interface BackgroundTransitionProps {
  scrollProgress: number;
}

export default function BackgroundTransition({ scrollProgress }: BackgroundTransitionProps) {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* First Background Image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: 1 - scrollProgress / 100,
          backgroundImage: 'url(/tech-bg-1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Second Background Image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: scrollProgress / 100,
          backgroundImage: 'url(/tech-bg-2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/60" />
    </div>
  );
}