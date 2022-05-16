import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any[];
  returnValue: string;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getSkills();
    console.log(this.skills);
  }

  getSkills(): void {
    this.db.getSkills().subscribe(skills => this.skills = skills);
  }

  showLevel(num: number): string {

    if(num == 0) this.returnValue = "Sin conocimientos";
    if(num == 1) this.returnValue = "Nivel básico";
    if(num == 2) this.returnValue = "Nivel intermedio";
    if(num == 3) this.returnValue = "Nivel avanzado";

    return this.returnValue;
  }

}
