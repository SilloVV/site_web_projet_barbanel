import { Component } from '@angular/core';
import { MenuComponent } from './pages/présentation/menu/menu.component';
import { PresentationEtudiantsComponent } from './pages/présentation/presentation-etudiants/presentation-etudiants.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent, PresentationEtudiantsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Projet 5A';
}
