import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'block1/t01',
    loadComponent: () => import('./block1/t01-counter').then((m) => m.T01Counter),
  },
  {
    path: 'block1/t02',
    loadComponent: () => import('./block1/t02-orders').then((m) => m.T02Orders),
  },
  {
    path: 'block1/t03',
    loadComponent: () => import('./block1/t03-product-card').then((m) => m.ProductCard),
  },
  {
    path: 'block1/t04',
    loadComponent: () => import('./block1/t04-picker').then((m) => m.T04Picker),
  },
  {
    path: 'block2/t06',
    loadComponent: () => import('./block2/t06-panel').then((m) => m.T06Panel),
  },
  {
    path: 'block2/t07',
    loadComponent: () => import('./block2/t07-draft').then((m) => m.T07Draft),
  },
  {
    path: 'block4/t11',
    loadComponent: () => import('./block4/t11-signup').then((m) => m.T11Signup),
  },
  {
    path: 'block4/t12',
    loadComponent: () => import('./block4/t12-signal-signup').then((m) => m.T12SignalSignup),
  },
];
