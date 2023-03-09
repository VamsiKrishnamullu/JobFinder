import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsNewComponent } from './jobs-new/jobs-new.component';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JobDetailsComponent } from './job-details/job-details.component';

ReactiveFormsModule
@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobsNewComponent,
    JobDetailsComponent
  ],
  imports: [ BrowserModule ,AppRoutingModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
