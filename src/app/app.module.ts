import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainerComponent } from '../Components/trainer/trainer.component';
import { studentComponent } from '../Components/student/student.component';
import { MovieComponent } from '../Components/movie/movie.component';
import { AddDashBetweenPipe } from '../CustomPipes/add-dash-between.pipe';
import { RatingComponent } from '../SharedComponents/rating/rating.component';
import { EmployeeComponent } from '../Components/Employee/Employee.Component';
import { ProductComponent } from '../Components/product/product.component';
import { NobelComponent } from '../Components/nobel/nobel.component';
import { GithubComponent } from '../Components//github/github.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainerComponent,
    studentComponent,
    MovieComponent,
    AddDashBetweenPipe,
    RatingComponent,
    EmployeeComponent,
    ProductComponent,
    NobelComponent,
    GithubComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
