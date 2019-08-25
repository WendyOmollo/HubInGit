import { Component, OnInit } from '@angular/core';
import { RepoService} from '../repo.service';
import { Repo} from '../repo';

@Component({
  selector: 'app-repo-parent',
  templateUrl: './repo-parent.component.html',
  styleUrls: ['./repo-parent.component.css']
})
export class RepoParentComponent implements OnInit {
  repos:Repo[];

  constructor(public repoService:RepoService) { }

  
  searchForRepo(searchRepo:string){
    this.repoService.searchOneRepo(searchRepo).subscribe(data=>{
      this.repos = data;
      console.log(this.repos)
    })
  }
  ngOnInit() {
    this.searchForRepo('WendyOmollo');
  }
}

