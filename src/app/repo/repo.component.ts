import { Component, OnInit ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
  export class RepoComponent implements OnInit {
  @Output() emitEvent = new EventEmitter<any>()
  searchRepo:string;

  searchPerson(){
    this.emitEvent.emit(this.searchRepo);
  }
  constructor() { }

  ngOnInit() {
  }

}
