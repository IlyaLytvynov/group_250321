import { createLighter } from './lighter.js';
import './moduleB.js';
const lighters = document.querySelectorAll('.light-change');
for (let i = 0; i < lighters.length; i++) {
  createLighter(lighters[i]);
}
