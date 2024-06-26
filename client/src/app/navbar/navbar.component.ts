import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  title = 'client';

  links = [
    {
      icon: 'fa-wallet',
      route: '',
      title: 'Wallet'
    },
    {
      icon: 'fa-money-bill-1',
      route: '',
      title: 'Budget'
    }, {
      icon: 'fa-piggy-bank',
      route: '',
      title: 'Goals'
    }
  ]
}
