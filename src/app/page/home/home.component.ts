import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    style: 'display: flex; flex-direction: column; height: 100dvh;'
  }
})
export class HomeComponent {

}
