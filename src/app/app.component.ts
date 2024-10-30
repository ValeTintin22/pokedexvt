import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonViewComponent } from './Components/pokemon-view/pokemon-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PokemonViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
