import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileImg: string;

  constructor(public db: DbService) { }

  ngOnInit(): void {
    this.db.getUser(1).subscribe(user => this.profileImg = user.img);
  }

  toggleLog(): void {
    this.db.loggedIn = !this.db.loggedIn
  }

  changeImg(): void {
    let aux: any = prompt("Ingresar la URL de la nueva imagen de perfil :: PNG | JPG | SVG");
    if(typeof aux === 'string') this.profileImg = 
      /(svg|png|jpg)$/gmi.test(aux) ? aux: this.profileImg;
  }

}
