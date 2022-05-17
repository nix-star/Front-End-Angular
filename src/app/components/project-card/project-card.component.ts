import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
