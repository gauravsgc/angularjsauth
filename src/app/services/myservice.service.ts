import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private url="http://localhost:8000/login"
  constructor( private httpclient:HttpClient) { }

  Login(data:any){
    return this.httpclient.post(this.url,data)

      }


}
