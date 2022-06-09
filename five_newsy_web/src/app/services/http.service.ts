import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly apiUrl: string = environment.apiUrl;
  readonly token: string = environment.userData.token;

  constructor(private http: HttpClient) {
    this.setToken(this.token);
  }

  get(url: string, params: any = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get(`${this.apiUrl}${url}`, { headers: this.getHeader(), params })
        .subscribe(
          (response: any) => resolve(response),
          (error) => reject(error)
        );
    });
  }

  post(url: string, params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .post(`${this.apiUrl}${url}`, params, { headers: this.getHeader() })
        .subscribe(
          (response: any) => resolve(response),
          (error: any) => reject(error)
        );
    });
  }

  patch(url: string, params: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .patch(`${this.apiUrl}${url}`, params, { headers: this.getHeader() })
        .subscribe(
          (response: any) => resolve(response),
          (error: any) => reject(error)
        );
    });
  }

  delete(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .delete(`${this.apiUrl}${url}`, { headers: this.getHeader() })
        .subscribe(
          (response: any) => resolve(response),
          (error: any) => reject(error)
        );
    });
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  private getHeader(contentType: string = ''): any {
    let header: HttpHeaders = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    const token = localStorage.getItem('token');

    if (token) {
      header = header.append('Authorization', `Bearer ${token}`);
    }

    if (contentType) {
      header.append('Content-Type', contentType);
    }

    return header;
  }
}
