import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private readonly apiUrl = 'http://ec2-43-216-81-166.ap-southeast-5.compute.amazonaws.com:8080/api/hello';

  constructor(private http: HttpClient) { }

  getHelloMessage(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}