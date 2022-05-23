import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { User } from 'src/app/Interfaces';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  user: User;

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.db.getUser(1).subscribe(user => this.user = user);
  }

}
