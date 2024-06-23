import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCompComponent } from './news-comp/news-comp.component';
import{HttpClientModule} from '@angular/common/http';
import { PathCompComponent } from './path-comp/path-comp.component';
import { CommentCompComponent } from './comment-comp/comment-comp.component'

@NgModule({
  declarations: [
    AppComponent,
    NewsCompComponent,
    PathCompComponent,
    CommentCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
