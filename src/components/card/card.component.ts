import { Fish } from '../../ts/models';
import { Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ SessionService ]
})
export class CardComponent {
  @Input() fish: Fish = { Id: 0, Name: "", Water: "freshwater", Colors: [], Length: 0, ImageUrl: "", Price: 0 }
  session = inject(SessionService);
}
