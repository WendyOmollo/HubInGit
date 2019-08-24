import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  @Output() emitPerson = new EventEmitter<any>() 
  searchUser:string;

  constructor() { }
  
  searchPerson(){
    this.emitPerson.emit(this.searchUser);
  }
  ngOnInit() {
  }

}
