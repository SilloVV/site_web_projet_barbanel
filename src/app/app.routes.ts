import { Routes } from '@angular/router';
import { PresentationBarbanelComponent } from './pages/presentation-barbanel/presentation-barbanel.component';
import { PresentationEtudiantsComponent } from './pages/présentation/presentation-etudiants/presentation-etudiants.component';
import { PresentationProjetComponent } from './pages/presentation-projet/presentation-projet.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { SpecificationTechniquesComponent } from './pages/specification-techniques/specification-techniques.component';
import { PistesSuiviesComponent } from './pages/pistes-suivies/pistes-suivies.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'first', // Redirection par défaut
    pathMatch: 'full',
  },
  {
    path: 'first',
    component: PresentationEtudiantsComponent, // Présentation de l'équipe
  },
  {
    path: 'project',
    component: PresentationProjetComponent, // Présentation du projet
  },
  {
    path: 'company',
    component: PresentationBarbanelComponent, // Présentation de l'entreprise
  },
  {
    path: 'specifications',
    component: SpecificationTechniquesComponent, // Spécifications techniques
  },
  {
    path: 'solutions',
    component: SolutionsComponent, // Solutions proposées
  },
  {
    path: "pistes",
    component: PistesSuiviesComponent,
  },
  {
  path: '**',
  redirectTo: 'first',
  },
];
