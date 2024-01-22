import { Component } from '@angular/core';
import { ProjectsListComponent } from '../../components/projects-list/projects-list.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsListComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
