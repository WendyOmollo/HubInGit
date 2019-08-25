import { Injectable } from '@angular/core';
import { Repo} from './repo';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class RepoService {
repos:Repo[]=[];

  constructor(private http:HttpClient) { }
   searchOneRepo(searchRepo:string){
     interface Response{
      data:[];
     }
     let searchEndPoint = "https://api.github.com/repos/WendyOmollo?access_token=" + environment.HUB_KEY;
     let promise = new Promise ((resolve,reject)=>{
       this.http.get<Response>(searchEndPoint + "&q=" + searchRepo).toPromise().then(
         (results)=>{
           this.repos = [];
           console.log(results)
           for(let i=0;i<results.data.length;i++){
             this.repos.push(new Repo(results.data[i][url]))
         }
         console.log(this.repos);
             resolve();
           }
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
