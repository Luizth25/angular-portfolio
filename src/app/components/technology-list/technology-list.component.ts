import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type technologyInfoList = { icon: string; name: string }[];

@Component({
  selector: 'app-technology-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technology-list.component.html',
  styleUrl: './technology-list.component.css',
})
export class TechnologyListComponent {
  technologyList: technologyInfoList = [
    {
      icon: 'assets/icons/angular-icon.svg',
      name: 'angular',
    },
    {
      icon: 'assets/icons/javascript-icon.svg',
      name: 'javascript',
    },
    {
      icon: 'assets/icons/react-icon.svg',
      name: 'react',
    },
    {
      icon: 'assets/icons/typescript-icon.svg',
      name: 'typescript',
    },
    {
      icon: 'assets/icons/git-icon.svg',
      name: 'git',
    },
    {
      icon: 'assets/icons/css-icon.svg',
      name: 'CSS',
    },
    {
      icon: 'assets/icons/html-icon.svg',
      name: 'HTML',
    },
    {
      icon: 'assets/icons/nodejs-icon.svg',
      name: 'nodejs',
    },
  ];
}
