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

  ngOnInit() {
  }
  searchForRepo(searchRepo:string){
    this.repoService.searchOneRepo(searchRepo).then(
      (results)=>{
        this.repos = this.repoService.repos;
      },
      (error)=>{
        console.log('error')
      }
    )
  }

}
