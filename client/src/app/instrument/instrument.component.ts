import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'instrument',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './instrument.component.html',
  styleUrl: './instrument.component.scss'
})
export class InstrumentComponent {
}
