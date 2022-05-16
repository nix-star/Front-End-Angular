import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent implements OnInit {

  @Input() skill: any;

  constructor() { }

  ngOnInit(): void {
  }

  anchoBarra(num: number): string {
    return (num*33.333333).toString() + "%";
  }

}
