import { Component, OnInit, Input } from '@angular/core';
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

  getNextId(): number {
    if(this.exps.length === 0) return 1
    else return (this.exps[this.exps.length-1].id || -1)+1;
  }

  add(): void{  
    let str: string|null = prompt("Ingrese un nuevo valor", `Empleo ${this.getNextId()}`);

    if(typeof str === 'string' && str!==""){
      this.db.addExp({
        "id": this.getNextId(),
        "job": str
      }).subscribe(exp => this.exps.push(exp));
    }
  }

  delete(exp: Experience): void {
    let index: number = typeof exp.id === 'number' ? exp.id : -1;
    this.db.removeExp(exp).subscribe(() => {
      this.exps.splice(index, 1);
      this.getExp();
    });
  }

  edit(exp: Experience): void {
    let aux: any = prompt("Modifique el valor", `${exp.job}`);
    exp.job = typeof aux === 'string' ? aux : exp.job;
    this.db.updateExp(exp).subscribe();
  }

}
