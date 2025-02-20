import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from '../login/login.component';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, MatToolbarModule, LoginComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [ SessionService ]
})
export class HeaderComponent {
  session = inject(SessionService);

  getUser() {
    const userJson = sessionStorage.getItem('user');
    return userJson !== null ? JSON.parse(userJson) : undefined;
  }

  getCart() {
    const cartJson = sessionStorage.getItem('cart');
    return cartJson !== null ? JSON.parse(cartJson) : [];
  }
}
