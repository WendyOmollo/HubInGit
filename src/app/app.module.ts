import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { FormsModule} from '@angular/forms';
import { RepoComponent } from './repo/repo.component';
import { RepoParentComponent } from './repo-parent/repo-parent.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoService} from './repo.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    RepoComponent,
    RepoParentComponent,
    UserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
