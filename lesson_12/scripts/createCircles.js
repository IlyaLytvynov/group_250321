import { createCircle } from './createCircle.js';

export const createCircles = (root, circleCount = 1) => {
  for (let i = 0; i < circleCount; i++) {
    createCircle(root, 50);
  }
};
