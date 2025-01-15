import { Component, HostListener } from '@angular/core';
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
      id: 'pistes',
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


   // Variable pour suivre l'index de la section active
  activeIndex: number = 0; 

   
  // Détecte quand une touche est enfoncée (flèches gauche/droite)
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      this.changeActiveSection(event.key);
    }
  }

  // Change la section active en fonction de la touche pressée
  private changeActiveSection(key: string): void {
    if (key === 'ArrowRight') {
      this.activeIndex = (this.activeIndex + 1) % this.sections.length;  // Passage à la section suivante
    } else if (key === 'ArrowLeft') {
      this.activeIndex = (this.activeIndex - 1 + this.sections.length) % this.sections.length;  // Retour à la section précédente
    }
  }

  onSectionClick(index: number): void {
    this.activeIndex = index;
  }

  
}
