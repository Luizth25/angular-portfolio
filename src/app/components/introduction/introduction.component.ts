import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { TUserData } from '../../models/userData';
import { InfoPanelComponent } from '../../shared/info-panel/info-panel.component';
import { ContactIconComponent } from '../../shared/contact-icon/contact-icon.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [InfoPanelComponent, ContactIconComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  firstParagraphText: string = `
  Me chamo Luiz Felipe Thomaz Preto. Sou estudante de <strong>Sistemas de informação</strong>, desenvolvedor
  <strong>Front-end Junior</strong>, apaixonado por jogos, músicas e pixel arts.
  `;
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
