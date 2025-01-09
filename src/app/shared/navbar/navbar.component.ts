import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: true,
})
export class NavbarComponent {
  searchValue: string = '';
  router = inject(Router);

  onSearch(): void {
    if (this.searchValue.trim()) {
      // Navigate to the route with the search value as a parameter
      this.router.navigate(['/location', this.searchValue.trim()]);
    }
  }
}
