import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from 'src/Components/movie/movie.component';
import { Movies } from 'src/Components/movie/movieMockUp';
import { studentComponent } from 'src/Components/student/student.component';
import { TrainerComponent } from 'src/Components/trainer/trainer.component';
import { EmployeeComponent } from 'src/Components/Employee/Employee.Component';
import { Employee } from 'src/Components/Employee/employee';
import { ProductComponent } from 'src/Components/product/product.component';
import { NobelComponent } from 'src/Components/nobel/nobel.component';
import { GithubComponent } from 'src/Components/github/github.component';

const routes: Routes = [
  { path: 'Movies', component: MovieComponent },
  { path: 'Students', component: studentComponent },
  { path: 'Trainers', component: TrainerComponent },
  { path: 'Employees', component: EmployeeComponent },
  { path: 'Products', component: ProductComponent },
  { path: 'Nobel', component: NobelComponent },
  { path: 'Github',component: GithubComponent },
  { path: '**', component: MovieComponent }// Error COmponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
