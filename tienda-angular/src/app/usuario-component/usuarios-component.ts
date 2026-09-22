import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Padre } from '../padre/padre';

@Component({
  imports: [FormsModule, Padre],
  selector: 'app-usuarios',
  styleUrl: './usuarios-component.scss',
  templateUrl: './usuarios-component.html',
})
export class UsuariosComponent {

  public nombre: string = 'Carlos';
  public edad: number = 38;
  public urlImagen: string = 'https://raw.githubusercontent.com/Klerith/mas-talento/refs/heads/main/angular/angular-logo.png';

  sueldo = signal(1000);

  productos = [
    { id: 1, nombre: 'MacBook Pro' },
    { id: 2, nombre: 'iPhone' },
    { id: 3, nombre: 'Monitor OLED' }
  ];

  public comprar(): void {
    console.log('Comprando...');
  }

  public aumentarSueldo(): void {
    this.sueldo.set(this.sueldo() + 100);
  }

}
