import { Component, OnInit ,Output , EventEmitter} from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  searchRepo:string;
  @Output() emitEvent = new EventEmitter<any>()


  searchPerson(){
    this.emitEvent.emit(this.searchRepo);
  }
  constructor() { }

  ngOnInit() {
  }

}
