
import React from 'react';
import { AppProvider, useAppState } from './store';
import { Experience } from './components/Experience';
import { UploadScreen } from './components/UI/UploadScreen';
import { HUD } from './components/UI/HUD';

const Main: React.FC = () => {
  const { view } = useAppState();

  return (
    <div className="relative w-screen h-screen bg-[#050515] overflow-hidden">
      {/* Background 3D always running for atmosphere */}
      <Experience />

      {/* Interface Layers */}
      <div className="relative z-10 w-full h-full transition-all duration-1000">
        {view === 'UPLOAD' ? (
          <UploadScreen />
        ) : (
          <HUD />
        )}
      </div>

      {/* Decorative Overlay Particles for UI */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0a2a]/50 via-transparent to-black" />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default App;
