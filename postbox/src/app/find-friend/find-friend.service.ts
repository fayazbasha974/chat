import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindFriendService {

  constructor(private apiService: ApiServiceService) { }

  findFriend(data: any): Observable<any> {
    return this.apiService.post('auth/findFriend', data);
  }

  sendRequest(data: any): Observable<any> {
    return this.apiService.post('auth/friendRequest', data);
  }

}
