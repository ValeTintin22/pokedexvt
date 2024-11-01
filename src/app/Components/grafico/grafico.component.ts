import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grafico.component.html',
  styleUrl: './grafico.component.css'
})
export class GraficoComponent {
  vidaActual = 5;
  vidaMaxima = 5;
  defensa = 3;
  ataque = 4;

  // Array para mostrar los corazones de vida
  get healthArray() {
    return Array(this.vidaActual).fill('❤️');
  }

  // Ataques y defensas disponibles
  ataques = [
    { nombre: 'Golpe Rápido', daño: 2 },
    { nombre: 'Rayo', daño: 3 },
    { nombre: 'Corte Fuego', daño: 4 },
    { nombre: 'Furia', daño: 5 },
    { nombre: 'Embestida', daño: 6 }
  ];

  defensas = [
    { nombre: 'Escudo', defensa: 1 },
    { nombre: 'Evasión', defensa: 2 },
    { nombre: 'Fortaleza', defensa: 3 },
    { nombre: 'Reflejo', defensa: 4 },
    { nombre: 'Barrera', defensa: 5 }
  ];

  // Función para obtener un ataque aleatorio
  obtenerAtaqueAleatorio() {
    const ataqueAleatorio = this.ataques[Math.floor(Math.random() * this.ataques.length)];
    return ataqueAleatorio;
  }

  // Función para obtener una defensa aleatoria
  obtenerDefensaAleatoria() {
    const defensaAleatoria = this.defensas[Math.floor(Math.random() * this.defensas.length)];
    return defensaAleatoria;
  }

  atacar() {
    const ataqueSeleccionado = this.obtenerAtaqueAleatorio();
    const damage = ataqueSeleccionado.daño - this.defensa; // Considerar defensa
    const dañoFinal = Math.max(1, damage); // Asegura que el daño mínimo sea 1
    this.vidaActual -= dañoFinal; // Restar el daño a la vida actual

    if (this.vidaActual < 0) this.vidaActual = 0;

    // Mensajes de alerta según el estado de vida
    if (this.vidaActual === 0) {
      alert("¡Tu Pokémon se ha debilitado!");
    } else {
      alert(`¡Atacaste con ${ataqueSeleccionado.nombre}! Vida restante: ${this.vidaActual}`);
    }
  }

  curar() {
    if (this.vidaActual < this.vidaMaxima) {
      this.vidaActual++;
      alert("¡Has curado 1 punto de vida!");
    } else {
      alert("La vida ya está al máximo.");
    }
  }

  defender() {
    const defensaSeleccionada = this.obtenerDefensaAleatoria();
    this.defensa += defensaSeleccionada.defensa; // Aumentar defensa
    alert(`¡Defendiste con ${defensaSeleccionada.nombre}! Defensa actual: ${this.defensa}`);
  }
}
