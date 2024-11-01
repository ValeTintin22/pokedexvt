import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {
  @Input() pokemons: string[] = []; 
  pokedex: string[] = []; 

  mostrarListaAleatoria() {
    this.pokedex = []; 
    let cantidad = 5; 
    for (let i = 0; i < cantidad; i++) {
      let indiceAleatorio = Math.floor(Math.random() * this.pokemons.length);
      this.pokedex.push(this.pokemons[indiceAleatorio]);
    }
  }
}

