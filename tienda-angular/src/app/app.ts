import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuarios } from './usuarios/usuarios';

@Component({
  imports: [RouterOutlet, Usuarios],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('tienda-angular');

}
