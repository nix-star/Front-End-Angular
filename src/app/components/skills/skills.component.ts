import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Skill } from 'src/app/Interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[];
  newSkill: Skill = {
    technology: "",
    logo: "",
    level: 0
  };
  
  constructor(public db: DbService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.getSkills()
  }

  getSkills(): void {
    this.db.getSkills().subscribe(skills => this.skills = skills);
  }

  actualizar(): void {
    setTimeout(()=>this.getSkills(), 200);
    setTimeout(()=>this.getSkills(), 500);
    setTimeout(()=>this.getSkills(), 1000);
    setTimeout(()=>this.getSkills(), 3000);
  }

  showLevel(num: number): string {
    let returnString: string = "";

    if(num == 0) returnString = "Sin conocimientos";
    if(num == 1) returnString = "Nivel básico";
    if(num == 2) returnString = "Nivel intermedio";
    if(num == 3) returnString = "Nivel avanzado";

    return returnString;
  }

  resetNewSkill(): void {
    this.newSkill.technology = "";
    this.newSkill.logo = "";
    this.newSkill.level = 0;
  }

  add(skill: Skill): void {
    this.db.addSkill(skill).subscribe();
    
    this.actualizar();
  }

  delete(skill: Skill): void {
    let index: number = typeof skill.id === 'number' ? skill.id : -1;
    this.db.removeSkill(skill).subscribe(() => {
      //this.skills.splice(index, 1);
      //this.getSkills();
    });
    /* this.skills.splice(index, 1);
    this.getSkills(); */
    this.actualizar();
  }

  onSubmit(): void|boolean {
    if(this.newSkill.technology===""||this.newSkill.logo==="") {
      alert("FORMULARIO INCOMPLETO");
      return false;
    }

    this.add(this.newSkill);

    /* alert(`
      TECNOLOGÍA: ${this.newSkill.technology}
      LOGO: ${this.newSkill.logo}
      NIVEL: ${this.showLevel(this.newSkill.level)}
    `); */

    this.resetNewSkill();
    
  }

}
