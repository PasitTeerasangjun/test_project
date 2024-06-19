import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  api = "https://ntl-linebc-chatbot-cc8d356785a1.herokuapp.com/liff_api/"

  getapi(path:string){
    return this.http.get(this.api + path);
  }

  postapi(path:string ,data:any) {

    return this.http.post(this.api + path, data, { responseType: 'text' });
    
  }
}
