import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {

  @Output() clic = new EventEmitter<Event>();

  constructor(public db: DbService) { }

  ngOnInit(): void {
  }

  onAdd($event: Event): void {
    this.clic.emit($event)
  }

}
