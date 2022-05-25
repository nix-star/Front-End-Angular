import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Experience } from 'src/app/Interfaces';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  exps: Experience[];
  
  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getExp();
  }

  getExp(): void {
    this.db.getExp().subscribe(exps => this.exps = exps);
  }

  actualizar(): void {
    setTimeout(()=>this.getExp(), 200);
    setTimeout(()=>this.getExp(), 500);
    setTimeout(()=>this.getExp(), 1000);
    setTimeout(()=>this.getExp(), 2000);
    setTimeout(()=>this.getExp(), 5000);
  }

  getNextId(): number {
    if(this.exps.length === 0) return 1
    else return (this.exps[this.exps.length-1].id || -1)+1;
  }

  add(): void{  
    let str: string|null = prompt("Agregar un nuevo empleo", `Empleo ${this.getNextId()}`);

    if(typeof str === 'string' && str!==""){
      let newExp: Experience = {
        "id": this.getNextId(),
        "job": str
      }
      this.db.addExp(newExp).subscribe();
      this.exps.push(newExp);
    }

  }

  delete(exp: Experience): void {
    this.db.removeExp(exp).subscribe();
    this.actualizar();
  }

  edit(exp: Experience): void {
    let aux: any = prompt("Modificar empleo", `${exp.job}`);
    exp.job = typeof aux === 'string' ? aux : exp.job;
    this.db.updateExp(exp).subscribe();
  }

}
