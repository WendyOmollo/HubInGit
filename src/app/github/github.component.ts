import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { UserService} from '../user.service';



@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  constructor(public userService:UserService) { }
  users:User[];

  searchForUser(searchForPerson:string){

    this.userService.searchForOneUser(searchForPerson).then(
      ()=>{this.users = this.userService.users;
      console.log(this.users);
    },
    (error)=>{
      console.log(error);
    }
    )
  }
  


  
  
  
  ngOnInit() {
  }

}
