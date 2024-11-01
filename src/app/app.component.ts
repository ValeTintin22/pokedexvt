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

pokemons: string[] = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Jigglypuff']; // Lista de Pokémon
pokemonEncontrado: string | null = null;

manejarBusqueda(nombre: string | null) {
  if (nombre) {
    const encontrado = this.pokemons.find(pokemon => pokemon.toLowerCase() === nombre);
    this.pokemonEncontrado = encontrado ? encontrado : null;
  } else {
    this.pokemonEncontrado = null;
  }
}
}