import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  //Essa é a rota padrão, caso seja digitado um caminho na url que não é nenhum dos caminhos mapeados.
  { path: '**', redirectTo: '' },
];
