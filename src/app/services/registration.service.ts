import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private apiUrl = 'http://ec2-43-216-81-166.ap-southeast-5.compute.amazonaws.com:8080/api/register';

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    const body = {
      username: username,
      password: password
    };

    return this.http.post<any>(this.apiUrl, body);
  }
}