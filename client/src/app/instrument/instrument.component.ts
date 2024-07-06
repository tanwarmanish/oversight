import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstrumentNavbarComponent } from './instrument-navbar/instrument-navbar.component';

@Component({
  selector: 'instrument',
  standalone: true,
  imports: [RouterOutlet, InstrumentNavbarComponent],
  templateUrl: './instrument.component.html',
  styleUrl: './instrument.component.scss'
})
export class InstrumentComponent {
  instrument: any = null;
}
