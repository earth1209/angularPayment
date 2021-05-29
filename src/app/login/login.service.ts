import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(data:any): Observable<any> {
    
    console.log(data);
    return this.http.post(`${environment.apiUrl}/authenticate`, data,  environment.headers);
  }
}
