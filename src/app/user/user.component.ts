import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() emitPerson = new EventEmitter<any>() 
  searchThePerson:string;

  searchUser(){
    this.emitPerson.emit(this.searchThePerson);
  }

  constructor() { }

  ngOnInit() {
  }

}
