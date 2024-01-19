import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-icon.component.html',
  styleUrl: './contact-icon.component.css',
})
export class ContactIconComponent {
  @Input()
  iconLink: string = '';
  @Input()
  iconName: string = '';
  @Input()
  iconImage: string = '';
  @Input()
  iconDescription: string = '';
}
