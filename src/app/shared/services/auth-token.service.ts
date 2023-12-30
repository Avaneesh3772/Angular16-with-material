import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  constructor() { }

  setTokenToSessionStorage(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value));
 }

  getTokenToSessionStorage(key: string) {
    return sessionStorage.getItem(key);
  }
}
