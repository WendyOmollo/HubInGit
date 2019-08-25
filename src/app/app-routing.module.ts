import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoParentComponent } from './repo-parent/repo-parent.component';
import { GithubComponent } from './github/github.component';
import{ RepoComponent} from './repo/repo.component';

const routes: Routes = [
  { path: 'github', component: GithubComponent},
  { path: 'repo', component: RepoComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
