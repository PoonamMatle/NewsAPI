import { Component } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-comp',
  templateUrl: './news-comp.component.html',
  styleUrls: ['./news-comp.component.css']
})
export class NewsCompComponent {

  constructor(private service:NewsServiceService){}
article:any
  ngOnInit()
{

  this.service.getNews().subscribe((data)=>{

    console.log(data)
    this.article=data.articles
  })

}

}
