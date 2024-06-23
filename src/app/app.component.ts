import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newsAPI';
  constructor(private route:Router){}
  fun(){

    this.route.navigate(['/news'])
  }
  fun1(){

    this.route.navigate(['/post'])
  }
  fun2(){

    this.route.navigate(['/comment'])
  }

}
