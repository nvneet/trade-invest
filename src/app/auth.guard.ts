import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('isLoggedIn');
  if (isLoggedIn) return true;
  const returnUrl = typeof window !== 'undefined' ? window.location.pathname : '/';
  return router.createUrlTree(['/login'], { queryParams: { returnUrl } });
};

export default authGuard;
