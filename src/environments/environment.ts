import { HttpClient, HttpHeaders } from '@angular/common/http';
export const environment = {
  production: false,
  apiUrl : 'http://localhost:8080',
   headers : { headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })}
};
