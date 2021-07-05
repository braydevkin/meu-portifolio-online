import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TechLevelComponent } from './components/tech-level/tech-level.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopbarComponent,
    HomeComponent,
    ContactsComponent,
    TechLevelComponent,
    MyProjectsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
