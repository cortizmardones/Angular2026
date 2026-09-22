import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Padre } from './padre/padre';
import { CounterPageComponent } from './counter-page-component/counter-page-component';
import { UsuariosComponent } from './usuario-component/usuarios-component';

@Component({
  imports: [RouterOutlet, UsuariosComponent, Padre, CounterPageComponent],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('tienda-angular');

}
