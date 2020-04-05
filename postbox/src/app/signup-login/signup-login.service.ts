import { Injectable } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  constructor(private apiService: ApiServiceService) { }

  postData(endponint: string, data: any): Observable<any> {
    return this.apiService.post(endponint, data);
  }
}
