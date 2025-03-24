import { Component, Input } from '@angular/core';

@Component({
  import { Component } from '@angular/core';// Suggested code may be subject to a license. Learn more: ~LicenseLog:3436635119.
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemonList: any[] = []; // Lista inicializada como arreglo vacío

  mostrarListaAleatoria(): void {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const pokemons = data.results.map((pokemon: any) => pokemon.name);
        this.pokemonList = this.obtenerPokemonesAleatorios(pokemons, 3);
      })
      .catch(error => {
        console.error('Error al obtener los Pokémon:', error);
        // Manejar el error de manera apropiada (mostrar mensaje de error, etc.)
      });
  }

  obtenerPokemonesAleatorios(pokemones: string[], cantidad: number): string[] {
    const aleatorios = [...pokemones].sort(() => Math.random() - 0.5);
    return aleatorios.slice(0, cantidad);
  }
}

  
