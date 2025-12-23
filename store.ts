
import React, { createContext, useContext, useState, useCallback } from 'react';
import { AppState } from './types';

interface ContextType extends AppState {
  setPhotos: (photos: string[]) => void;
  setIsForming: (val: boolean) => void;
  setProgress: (val: number) => void;
  setGravity: (val: number) => void;
  setElasticity: (val: number) => void;
  setView: (val: 'UPLOAD' | 'SCENE') => void;
}

const AppContext = createContext<ContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const [isForming, setIsForming] = useState(false);
  const [progress, setProgress] = useState(0);
  const [gravity, setGravity] = useState(0.8);
  const [elasticity, setElasticity] = useState(0.5);
  const [view, setView] = useState<'UPLOAD' | 'SCENE'>('UPLOAD');

  // Using React.createElement instead of JSX to fix TS parser errors in .ts file
  return React.createElement(AppContext.Provider, {
    value: { 
      photos, setPhotos, 
      isForming, setIsForming, 
      progress, setProgress,
      gravity, setGravity,
      elasticity, setElasticity,
      view, setView
    }
  }, children);
};

export const useAppState = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppState must be used within AppProvider');
  return context;
};
