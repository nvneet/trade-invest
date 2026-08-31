// services/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthPayload {
  name?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:4000/api'; // local backend-node endpoint

  // token storage helpers
  saveToken(token: string) {
    localStorage.setItem('ti_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('ti_token');
  }

  logout() {
    localStorage.removeItem('ti_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  me(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me`);
  }

  login(credentials: AuthPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(payload: AuthPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, payload);
  }

  verifyEmail(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verify`, { token });
  }

  requestPasswordReset(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/password-reset-request`, { email });
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/password-reset`, { token, password });
  }
}
