import { Routes } from '@angular/router';
import {HomeComponent} from './page/home/home.component';
import {ChallengeComponent} from './page/challenge/challenge.component';
import {LetterSelectComponent} from './page/letter-select/letter-select.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'challenge',
    component: ChallengeComponent,
    children: [
      {
        path: '',
        component: LetterSelectComponent
      },
      {
        path: ':letter',
        component: LetterSelectComponent
      }]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
