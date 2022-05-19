import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Skill } from 'src/app/Interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];

  constructor(private db: DbService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.db.getSkills().subscribe(skills => this.skills = skills);
  }

  showLevel(num: number): string {
    let returnString: string = "";

    if(num == 0) returnString = "Sin conocimientos";
    if(num == 1) returnString = "Nivel básico";
    if(num == 2) returnString = "Nivel intermedio";
    if(num == 3) returnString = "Nivel avanzado";

    return returnString;
  }

}
