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
  index: number;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.db.getExp().subscribe(exps => this.exps = exps);
    /* this.getExp(); */
  }

  /* getExp(): void {
    this.db.getExp().subscribe(exps => this.exps = exps);
  }
 */
  add(): void{
    //let longitud: number = this.exps.length;
    let index: any = this.exps[this.exps.length-1].id;
    index += 1;
    //let str: string|null = prompt("Ingrese un nuevo valor", `Empleo ${index+1}`);
    let str: string|null = prompt("Ingrese un nuevo valor", `Empleo ${index+1}`);

    if(str!==null && str!=="") {
      this.db.addExp({
        "id": index,
        "job": str
      }).subscribe(str => this.exps.push(str));
    }
  }

  delete(exp: Experience): void {
    //console.log("Delete funciona");
    //let index: number = this.exps.filter(value => value.id === exp.id);
    let index: number = typeof exp.id === 'number' ? exp.id : -1;
    //if(typeof exp.id === 'number') index = exp.id;
    this.db.removeExp(exp).subscribe(() => this.exps.splice(index, 1));
    //this.db.removeExp(exp).subscribe(() => this.exps.filter(value => exp.id !== value.id));
    //this.getExp();
  }

  edit(): void {
    console.log("Edit funciona");
  }

}
