import { Component } from '@angular/core';
import {
  AnimationLoader,
  AnimationOptions,
  LottieComponent,
  provideLottieOptions,
} from 'ngx-lottie';
import { InfoPanelComponent } from '../../shared/info-panel/info-panel.component';
import { ContactIconComponent } from '../../shared/contact-icon/contact-icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LottieComponent, InfoPanelComponent, ContactIconComponent],
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
