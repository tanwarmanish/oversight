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
  activeLink:string = 'Home';
  links = [
    {
      route: '',
      title: 'Home'
    },
    {
      route: '',
      title: 'Wallet'
    },
    {
      route: '',
      title: 'Budget'
    }, {
      route: '',
      title: 'Goals'
    }
  ]
}
