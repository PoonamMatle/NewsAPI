import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathServiceService {

  constructor(private httpclient:HttpClient) { }
  apiURL="https://jsonplaceholder.typicode.com/posts"

  getPath():Observable<any>
{

  return this.httpclient.get(this.apiURL)

}

}
