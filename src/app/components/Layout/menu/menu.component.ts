import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navbarItem: Array<any> = [
    { name: 'Home', link: './home', icon: '' },
    { name: 'Services', link: './services', icon: '' },
    { name: 'Parking et conciergerie', link: './parking', icon: '' },
    { name: 'A propos', link: './about', icon: '' },
    { name: 'Actualités', link: './news', icon: '' },
    { name: 'Photos', link: './photos', icon: '' },
    { name: 'Contact', link: './contact', icon: '' }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
