import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ SessionService ]
})
export class LoginComponent {
  session = inject(SessionService);
  email = "";
  password = "";

  async login() {
    await this.session.login(this.email, this.password);
    window.history.back();
  }
}