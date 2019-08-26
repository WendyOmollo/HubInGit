import { Injectable } from '@angular/core';
import { User} from './user';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users:User[]=[];

  constructor(public http:HttpClient) { }

  searchForOneUser(searchForPerson){
    interface ApiResponse{
      userName:string;
      login:string;
      avatar_url:string;
      html_url:string;
      followers:any;
      following:any;
      created_at:Date;
    }
    let searchEnd = "https://api.github.com/users/" + searchForPerson + "?access_token=" + environment.HUB_KEY;
    let promise = new Promise((resolve,reject)=>{
      this.users = [];
      this.http.get<ApiResponse>(searchEnd).toPromise().then(
        (results)=>{
          this.users.push(results);
          console.log(results);
          resolve();
        },
        (error)=>{
          console.log(error);
          reject();
        }
      )
    })
    return promise;
  }
}
