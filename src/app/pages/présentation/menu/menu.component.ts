import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true, // Déclare que le composant est autonome
  imports: [CommonModule], // Ajoutez les modules nécessaires
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private router: Router) {}
  sections = [
    {
      id: 'first',
      name: "Présentation de l'equipe",
    },
    {
      id: 'project',
      name: 'Présentation du projet',
    },
    {
      id: 'company',
      name: 'Présentation de Barbanel',
    },
    {
      id: 'specifications',
      name: 'Spécifications techniques',
    },
    {
      id: 'paths',
      name: 'Pistes suivies',
    },
    {
      id: 'solutions',
      name: 'Solutions proposées',
    },
  ];

  navigateTo(sectionId: string): void {
    this.router.navigate([sectionId]);
  }
}
