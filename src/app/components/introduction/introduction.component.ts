import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { TUserData } from '../../models/userData';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  githubUser: TUserData;

  constructor(private userService: GithubService) {
    this.githubUser = {
      avatarUrl: '',
      htmlUrl: '',
    };
  }
  ngOnInit(): void {
    this.getGithubUser();
  }

  getGithubUser() {
    this.userService.getUser().subscribe({
      next: (res) => {
        this.githubUser = {
          avatarUrl: res.avatar_url,
          htmlUrl: res.html_url,
        };
      },
      error: (err) => console.error(err),
    });
  }
}
