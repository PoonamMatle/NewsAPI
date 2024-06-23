import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private httpclient:HttpClient) { }
apiURL="https://newsapi.org/v2/everything?q=tesla&from=2024-05-19&sortBy=publishedAt&apiKey=8673235b211a45ee91d3b6f6c4e0216a"

getNews():Observable<any>
{

  return this.httpclient.get(this.apiURL)

}

}
