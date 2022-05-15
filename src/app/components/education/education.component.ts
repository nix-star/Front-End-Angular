import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: any;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getEdu();
  }

  getEdu(): void {
    this.db.getEdu().subscribe(education => this.education = education);
  }

}
