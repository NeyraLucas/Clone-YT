import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    SidebarComponent,
    PostDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
