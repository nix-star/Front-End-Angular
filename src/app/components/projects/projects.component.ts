import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Project } from 'src/app/Interfaces';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  newProject: Project = {
    name: "",
    description: "",
    url: "",
    repo: ""
  };

  constructor(private db: DbService, public modal: NgbModal) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.db.getProjects().subscribe(projects => this.projects = projects);
  }

  actualizar(): void {
    setTimeout(() => this.getProjects(), 300);
    setTimeout(() => this.getProjects(), 600);
    setTimeout(() => this.getProjects(), 900);
  }

  delete(project: Project, event: Event): void {
    event.preventDefault();
    this.db.removeProject(project).subscribe();
    this.actualizar();
  }

  onSubmit(project: Project): void {
    this.db.addProject(project).subscribe();
    //this.projects.push(project);
    this.actualizar();
  }

}
