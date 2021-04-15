import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  navbarStatus=false;
  onNavbarShow(){
    this.navbarStatus=!this.navbarStatus;
  }
  ngOnInit() {
    
  }
  chatbotStatus=false;
  slideToggle(){
    this.chatbotStatus=!this.chatbotStatus;

  }

}