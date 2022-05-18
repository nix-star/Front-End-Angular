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

  getLastId(): number {
    if(this.exps.length === 0) return 0
    else return this.exps[this.exps.length-1].id || 0;
  }

  getExp(): void {
    this.db.getExp().subscribe(exps => this.exps = exps);
  }

  add(): void{  
    let str: string|null = prompt("Ingrese un nuevo valor", `Empleo ${this.getLastId()+1}`);

    if(typeof str === 'string' && str!==""){
      this.db.addExp({
        "id": this.getLastId()+1,
        "job": str
      }).subscribe(exp => this.exps.push(exp));
    }
  }

  delete(exp: Experience): void {
    //console.log("Delete funciona");
    //let index: number = this.exps.filter(value => value.id === exp.id);
    let index: number = typeof exp.id === 'number' ? exp.id : -1;
    //if(typeof exp.id === 'number') index = exp.id;

    this.db.removeExp(exp).subscribe(() => {
      this.exps.splice(index, 1);
      this.getExp();
    });
    //this.exps.splice(index, 1);

    //this.db.removeExp(exp).subscribe(() => this.exps.filter(value => exp.id !== value.id));
    //this.getExp();
    //this.exps.filter(value => exp.id !== value.id)
    //this.db.getExp();    
  }

  edit(): void {
    console.log("Edit funciona");
  }

}
