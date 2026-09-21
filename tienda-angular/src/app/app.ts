import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';
import { Padre } from './padre/padre';
import { Navbar } from './navbar/navbar';

@Component({
  imports: [RouterOutlet, Usuarios, Padre, Navbar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('tienda-angular');

}
