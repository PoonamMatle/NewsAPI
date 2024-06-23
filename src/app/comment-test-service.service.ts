import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentTestServiceService {

  constructor( private httpclient:HttpClient) { }
  apiURL="https://jsonplaceholder.typicode.com/comments"

  getComment():Observable<any>
  {
  
    return this.httpclient.get(this.apiURL)
  
  }
  

}
