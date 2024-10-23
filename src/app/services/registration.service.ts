import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl = 'http://ec2-43-216-132-196.ap-southeast-5.compute.amazonaws.com:8080/api/register';

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<string> {
    const body = {
      username: username,
      password: password
    };

    return this.http.post<string>(this.apiUrl, body);
  }
}