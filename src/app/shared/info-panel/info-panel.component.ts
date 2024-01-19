import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-panel.component.html',
  styleUrl: './info-panel.component.css',
})
export class InfoPanelComponent {
  @Input()
  title: string = '';
  @Input()
  firstParagraph: string = '';
  @Input()
  secondParagraph: string = '';
}
