import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './compenents/add-post/add-post.component';
import { HeaderComponent } from './compenents/header/header.component';
import { ListPostComponent } from './compenents/list-post/list-post.component';
import { UpdatePostComponent } from './compenents/update-post/update-post.component';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    HeaderComponent,
    ListPostComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
