import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
	selector: 'instrument-navbar',
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: './instrument-navbar.component.html',
	styleUrl: './instrument-navbar.component.scss'
})
export class InstrumentNavbarComponent {
	@Output() details: any = new EventEmitter();

	activeInstrument: number = 3;
	instruments = [
		{
			id: 1,
			title: 'SBI',
			balance: '221478',
			icon: 'fa-solid fa-bank'
		},
		{
			id: 2,
			title: 'HDFC',
			balance: '9478',
			icon: 'fa-solid fa-bank'
		},
		{
			id: 3,
			title: 'ICICI',
			balance: '51478',
			icon: 'fa-solid fa-bank'
		},
		{
			id: 4,
			title: 'AU Bank',
			balance: '22478',
			icon: 'fa-solid fa-bank'
		},
	];

	ngOnInit() {
		this.loadInstrument(this.instruments[3]);
	}

	loadInstrument(instrument: any) {
		this.details.emit(instrument);
		this.activeInstrument = instrument.id;
	}
}
