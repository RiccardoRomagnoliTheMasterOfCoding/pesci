import { Component, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [ CardComponent ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
  providers: [ SessionService ]
})
export class CatalogComponent {
  session = inject(SessionService);
}
