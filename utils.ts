
import { Vector3 } from 'three';

export const randomSpherePoint = (radius: number): Vector3 => {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const x = radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.sin(phi) * Math.sin(theta);
  const z = radius * Math.cos(phi);
  return new Vector3(x, y, z);
};

export const getTreePoint = (height: number, maxRadius: number): Vector3 => {
  const h = Math.random();
  const r = (1 - h) * maxRadius * (0.8 + Math.random() * 0.2);
  const angle = Math.random() * Math.PI * 2;
  return new Vector3(
    Math.cos(angle) * r,
    h * height - height / 2,
    Math.sin(angle) * r
  );
};

export const getHelixPoint = (i: number, total: number, height: number, radius: number, loops: number): Vector3 => {
  const t = i / total;
  const angle = t * Math.PI * 2 * loops;
  const r = (1 - t) * radius;
  return new Vector3(
    Math.cos(angle) * r,
    t * height - height / 2,
    Math.sin(angle) * r
  );
};
