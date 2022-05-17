import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {

  @Output() clic = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd($event: Event): void {
    this.clic.emit($event)
  }

}
