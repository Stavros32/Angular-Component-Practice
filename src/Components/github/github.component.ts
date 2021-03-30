import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { User } from './user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  savedUsers:User[] =[];
  name:string="";
  user!:User;
  constructor(private gitHub:GithubService) { }
addUser(){
this.savedUsers.push(this.user)
}

getUser(){
  if(this.name){
    this.gitHub.getUser(this.name).subscribe(data=>this.user=data);
  }
}

  ngOnInit(): void {

  }

}
