import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private apiService: ApiServiceService){ }

  postMessage(data: any): Observable<any> {
    return this.apiService.post('auth/message', data);
  }

  getChat(data: any): Observable<any> {
    return this.apiService.post('auth/message/chat', data);
  }

}
