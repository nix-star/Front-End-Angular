import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: DbService) { }

  ngOnInit(): void {
    this.db.loginMenu = false;
    this.db.getUsers().subscribe(user => this.db.loggedIn = user[0].active); //HARDCODEADO
  }

}
