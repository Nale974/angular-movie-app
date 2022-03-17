import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // @Output() postUpdatedEvent = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  genreFilter(event: any){
    // this.postUpdatedEvent.emit(updatedPost);
    console.log(event)
  }

}
