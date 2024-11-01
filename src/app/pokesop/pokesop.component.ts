import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-pokesop',
  standalone: true,
  imports: [],
  templateUrl: './pokesop.component.html',
  styleUrl: './pokesop.component.css'
})
export class PokesopComponent {
  @Input() pokemons: string[] = []; // Recibe la lista de Pokémon del componente padre
  pokemonAleatorio: string | null = null; // Pokémon aleatorio mostrado

  mostrarSorpresa() {
    if (this.pokemons.length > 0) {
      const indiceAleatorio = Math.floor(Math.random() * this.pokemons.length);
      this.pokemonAleatorio = this.pokemons[indiceAleatorio];
    }
  }
}
