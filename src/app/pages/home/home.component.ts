import { Component } from '@angular/core';
import { IntroductionComponent } from '../../components/introduction/introduction.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroductionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
