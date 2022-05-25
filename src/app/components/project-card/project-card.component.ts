import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  public ratio: number = 27;
  @Input() public name: string;
  @Input() public description: string;
  @Input() public url: string;
  @Input() public repo: string;
  @Output() public cardEmit = new EventEmitter<Event>();
  
  constructor(public db: DbService) { }

  ngOnInit(): void {
  }

  delProj(event: Event): void {
    this.cardEmit.emit(event);
  }

}
