import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { TUserRepos } from '../../models/userData';
import { CommonModule } from '@angular/common';
import { InfoPanelComponent } from '../../shared/info-panel/info-panel.component';
import { TechnologyListComponent } from '../technology-list/technology-list.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [CommonModule, InfoPanelComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css',
})
export class ProjectsListComponent {
  githubUserRepos: TUserRepos[] = [];

  constructor(private userService: GithubService) {}

  ngOnInit(): void {
    this.getGithubUser();
  }

  getGithubUser() {
    this.userService.getUserRepo().subscribe({
      next: (res) => {
        const reposName = [
          'Front-end-challenge',
          'Pokedex',
          'SortearAmigoSecreto',
          'Luquiz',
          'Perguntonildo',
          'angular-blog',
        ];

        const filteredRepos = res.filter((repo) =>
          reposName.includes(repo.name)
        );

        this.githubUserRepos = filteredRepos.map((repo) => ({
          description: repo.description || '',
          homepage: repo.homepage || '',
          name: repo.name || '',
          topics: repo.topics || [],
        }));
      },
      error: (err) => console.error(err),
    });
  }
}
