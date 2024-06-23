import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathCompComponent } from './path-comp/path-comp.component';
import { NewsCompComponent } from './news-comp/news-comp.component';
import { CommentCompComponent } from './comment-comp/comment-comp.component';

const routes: Routes = [

  {
    path:'news',component:NewsCompComponent
  },
  {
    path:'post',component:PathCompComponent
  },
  {
    path:'comment',component:CommentCompComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
