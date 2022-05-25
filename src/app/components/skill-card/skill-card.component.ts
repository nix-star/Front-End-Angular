import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input() skill: any;
  @Input() show: boolean;
  @Output() deleteSkill = new EventEmitter<Event>();
  
  constructor() { }

  ngOnInit(): void {
  }

  anchoBarra(num: number): string {
    return (num*33.333333).toString() + "%";
  }

  onDelete($event: Event){
    this.deleteSkill.emit($event);
  }

}
