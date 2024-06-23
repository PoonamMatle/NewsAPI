import { Component } from '@angular/core';
import { PathServiceService } from '../path-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-path-comp',
  templateUrl: './path-comp.component.html',
  styleUrls: ['./path-comp.component.css']
})
export class PathCompComponent {

  constructor(private service:PathServiceService){}

  path:any
  ngOnInit(){

    
      this.service.getPath().subscribe((data)=>{
        this.path=data
        console.log(this.path)
      });
      
    


  }

}
