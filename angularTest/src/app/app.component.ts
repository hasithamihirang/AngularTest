import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './component/roles/roles.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RolesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularTest';
}
