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
  @Input() fish: Fish = { id: 0, name: "", water: "freshwater", colors: [], length: 0, imageUrl: "", price: 0 }
  session = inject(SessionService);
}
