import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Output() emitPerson = new EventEmitter<any>() 
  searchUser:string;
  
  searchPerson(){
    this.emitPerson.emit(this.searchUser);
  }

  constructor() { }

  ngOnInit() {
  }

}
