import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AlphabetService} from './shared/alphabet/service/alphabet.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
