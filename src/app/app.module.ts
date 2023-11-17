import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolComponent } from './school/school.component';
import { SchoolsComponent } from './schools/schools.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
		SchoolComponent,
  	SchoolsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
