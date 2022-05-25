import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() delete = new EventEmitter<Event>();
  @Output() edit = new EventEmitter<Event>();

  constructor(public db: DbService) { }

  ngOnInit(): void {
    this.db.getUser(this.db.userId).subscribe(user => this.db.loggedIn = user.active);
  }

  onDelete($event: Event): void{
    this.delete.emit($event);
  }

  onEdit($event: Event): void{
    this.edit.emit($event);
  }
  
}
