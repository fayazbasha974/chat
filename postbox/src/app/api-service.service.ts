import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  get(url: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${url}`);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}${url}`, data);
  }

}
