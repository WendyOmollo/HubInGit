import { Injectable } from '@angular/core';
import { Repo} from './repo';
import { HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RepoService {
  constructor(private http:HttpClient) { }

   searchOneRepo(searchRepo:string):Observable<any>{
     return this.http.get("https://api.github.com/users/" + searchRepo + "/repos?" + environment.HUB_KEY) 
     
  }

}
