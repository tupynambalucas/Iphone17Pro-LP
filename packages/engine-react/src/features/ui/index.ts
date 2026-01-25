import { ExperienceCanvas } from '../canvas';

export function UI() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <ExperienceCanvas />
      </div>

      {/* UI Overlay Layer */}
      <main className="relative z-10 w-full h-full pointer-events-none">
        <div className="container mx-auto p-4 pointer-events-auto">
          <h1 className="text-white text-4xl font-bold">iPhone 17 Pro</h1>
        </div>
      </main>
    </div>
  );
}
