import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './pages/présentation/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,MenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Projet 5A';

  showHeader: boolean = true;

  // Variables pour chaque section (initialement true)
  showPresentationEtudiants: boolean = true;
  showSolutions: boolean = false;

  constructor(private router: Router) {
    // Écoutez les changements de navigation pour ajuster la visibilité de l'en-tête
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Réinitialiser la visibilité de chaque section
        this.resetSections();

        // Vérifiez la route et ajustez la visibilité des sections
        switch (event.url) {
          case '/first':
            this.showHeader = true;
            break;
          case '/project':
            this.showHeader = false;
            break;
          case '/company':
            this.showHeader = false;
            break;
          case '/specifications':
            this.showHeader = false;
            break;
          case '/solutions':
            this.showHeader = false;
            break;
            case '/pistes':
              this.showHeader = false;
              break;
          default:
            this.showHeader = true; // Si une route non définie est atteinte
        }
      }
    });
  }

  // Réinitialise la visibilité de toutes les sections
  private resetSections(): void {
    this.showPresentationEtudiants = false;
  }

  // Écouter les événements de touches du clavier
  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.navigateToNext();
    } else if (event.key === 'ArrowLeft') {
      this.navigateToPrevious();
    }
  }

  // Naviguer vers la section suivante
  navigateToNext(): void {
    const currentRoute = this.router.url;
    switch (currentRoute) {
      case '/first':
        this.router.navigate(['/project']);
        break;
      case '/project':
        this.router.navigate(['/company']);
        break;
      case '/company':
        this.router.navigate(['/specifications']);
        break;
      case '/specifications':
        this.router.navigate(['/pistes']);
        break;
      case '/pistes':
        this.router.navigate(['/solutions']);
        break;
      case '/solutions':
        // Si vous êtes sur la dernière section, vous pouvez soit ne rien faire,
        // soit revenir à la première section :
        this.router.navigate(['/first']);
        break;
      default:
        break;
    }
  }

  // Naviguer vers la section précédente
  navigateToPrevious(): void {
    const currentRoute = this.router.url;
    switch (currentRoute) {
      case '/first':
        this.router.navigate(['/solutions'])
        // Optionnel : on peut ne rien faire si on est déjà sur la première section
        break;
      case '/project':
        this.router.navigate(['/first']);
        break;
      case '/company':
        this.router.navigate(['/project']);
        break;
      case '/specifications':
        this.router.navigate(['/company']);
        break;
      case '/pistes':
        this.router.navigate(['/company']);
        break;
      case '/solutions':
        this.router.navigate(['/pistes']);
        break;
      default:
        break;
    }
  }

  
}