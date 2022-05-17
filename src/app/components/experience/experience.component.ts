import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public exps: any[];
  public obj: any;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getExp();
  }

  getExp(): void {
    this.db.getExp().subscribe(exps => this.exps = exps);
  }

  add(): void{
    //let index: number = this.exps[this.exps.length-1].id+1;
    //let str: string|null = prompt("Ingrese un nuevo empleo", `Empleo ${index+1}`);
    let str: string|null = prompt("Ingrese un nuevo empleo"); 
    
    this.obj = {
      //"id": index,
      "job": str
    };

    if(str!==null && str!=="") {
      this.db.addExp(this.obj).subscribe(str => this.exps.push(str));
    }
  }

}
