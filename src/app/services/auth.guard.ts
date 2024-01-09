import { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {

  
 
  let token=sessionStorage.getItem('token');
  if(token== null)
  {  
    alert("Please login first!!!,Thank you");
    window.location.href="/login"
      return false;
  }
  else
  {
    
    return true;
  }
};
