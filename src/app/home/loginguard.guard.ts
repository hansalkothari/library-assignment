import { CanActivateFn } from '@angular/router';

export const loginguardGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem("currentUser") != null)
    return false
  return true;
};
