import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() delete = new EventEmitter<Event>();
  @Output() edit = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete($event: Event): void{
    this.delete.emit($event);
  }

  onEdit($event: Event): void{
    this.edit.emit($event);
  }
  
}
