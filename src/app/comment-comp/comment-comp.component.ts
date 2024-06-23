import { Component } from '@angular/core';
import { CommentTestServiceService } from '../comment-test-service.service';


@Component({
  selector: 'app-comment-comp',
  templateUrl: './comment-comp.component.html',
  styleUrls: ['./comment-comp.component.css']
})
export class CommentCompComponent {

  constructor(private service:CommentTestServiceService){}

  info:any
  
  ngOnInit(){

    this.service.getComment().subscribe((data)=>{
      this.info=data
      console.log(this.info)


    });

  }

}
