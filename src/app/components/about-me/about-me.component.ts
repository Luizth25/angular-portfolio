import { Component } from '@angular/core';

import { TechnologyListComponent } from '../technology-list/technology-list.component';
import { InfoPanelComponent } from '../../shared/info-panel/info-panel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TechnologyListComponent, InfoPanelComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  firstParagraphText: string = `
    Estudo desenvolvimento desde 2021, em setembro de 2022 tive a minha primeira oportunidade de participar de um treinamento para virar <strong>front-end trainee</strong>.
    O treinamento teve fim em setembro de 2022, aonde eu conseguir passar e também minha primeira vaga como desenvolvedor front-end. Atualmente busco recolocação profissional.
    Utilizo em meus projetos principalmente tecnologias para o desenvolvimento <strong>front-end</strong>, com foco no <strong>javascript</strong>, <strong>typescript</strong>, <strong>React.js</strong>
    e <strong>Angular</strong>. Mas também dei um start nos meus estudos <strong>back-end</strong> com <strong>nodejs</strong> e <strong>c#</strong>.
  `;

  secondParagraphHTMLText: string = `
    Sou apaixonado por videogames e pixel art, a música faz parte do meu dia a dia, quando estou nos meus projetos pessoais, estudando ou praticando pixel art.
    Espero um dia conseguir utilizar tecnologia para ajudar pessoas.
  `;
}
