import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profileImg: string;

  constructor(public db: DbService, private router: Router) { }

  ngOnInit(): void {
    this.db.getUser(1).subscribe(user => this.profileImg = user.img);
  }

  toggleLog(): void {
    if(this.db.loggedIn) {
      this.db.changeStatus({
        "id": 1,
        "name": "Nicolás Chiesa",
        "user": "nix",
        "password": "1234",
        "profesion": "Desarrollador Web",
        "img": "/assets/profile.jpg",
        "active": false
      }).subscribe();
      this.db.loggedIn=false;
    }
    
    else this.router.navigate(['/login']);

  }

  changeImg(): void {
    let aux: any = prompt("Ingresar la URL de la nueva imagen de perfil :: PNG | JPG | SVG");
    if(typeof aux === 'string') this.profileImg = 
      /(svg|png|jpg)$/gmi.test(aux) ? aux: this.profileImg;
  }

}
