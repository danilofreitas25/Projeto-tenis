import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Favoritos', url: '/favoritos', icon: 'heart' },
    { title: 'Usuário', url: '/user', icon: 'person' },
  ];
  
  constructor() {}
}
