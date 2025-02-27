import { Component, inject, OnInit } from '@angular/core';
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
export class CatalogComponent implements OnInit {
  session = inject(SessionService);

  async ngOnInit(): Promise<void> {
    await this.session.fetchCatalog();
  }
}
