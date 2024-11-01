import { Component } from '@angular/core';
import { GraficoComponent } from '../grafico/grafico.component';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokemon-view',
  standalone: true,
  imports: [PokemonComponent,GraficoComponent],
  templateUrl: './pokemon-view.component.html',
  styleUrl: './pokemon-view.component.css'
})
export class PokemonViewComponent {
pokemonImagen: string= 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/0.png'
pokemonId: number=0;

handlePokemon(event:number){
  this.pokemonId += event
  this.pokemonImagen = 'https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/'+this.pokemonId+'.png';
}

}

