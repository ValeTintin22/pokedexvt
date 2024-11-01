import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
@Input({required: true}) solicitarImagen: string="https://raw.githubusercontent.com/PokeAPI/sprites/6e5b8ac354ddc347104840cbd14ad6e0b2fdb551/sprites/pokemon/";
 
@Output() clickPokemon = new EventEmitter<number>();

anteriorPokemon(){
  this.clickPokemon.emit(-1);
  
 }
siguientePokemon(){
  this.clickPokemon.emit(1);


}
}
