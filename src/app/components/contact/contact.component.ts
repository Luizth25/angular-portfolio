import { Component } from '@angular/core';
import {
  AnimationLoader,
  AnimationOptions,
  LottieComponent,
  provideLottieOptions,
} from 'ngx-lottie';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LottieComponent],
  providers: [
    provideLottieOptions({
      player: () => import('lottie-web'),
    }),
    AnimationLoader,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  options: AnimationOptions = {
    path: '../../../assets/img/lottie/Animation-email.json',
  };
}
