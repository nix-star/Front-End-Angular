import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: any[];

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.db.getProjects().subscribe(projects => this.projects = projects);
  }

}
