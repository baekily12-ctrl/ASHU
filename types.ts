
import { Vector3 } from 'three';

export interface AppState {
  photos: string[];
  isForming: boolean;
  progress: number;
  gravity: number;
  elasticity: number;
  view: 'UPLOAD' | 'SCENE';
}

export interface ParticleData {
  chaos: Vector3;
  formed: Vector3;
  weight: number;
}
