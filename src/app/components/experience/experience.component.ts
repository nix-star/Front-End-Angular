import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  //exps: string[] = ["Atención al cliente", "Atención telefónica", "Cajero", "Repositor"];
  exps: string[];

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getExp();
  }

  getExp(): void {
    this.db.getExp().subscribe(exps => this.exps = exps);
  }

}
