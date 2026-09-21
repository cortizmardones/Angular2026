import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.scss',
  templateUrl: './padre.html',
})
export class Padre {

  public nombrePadre: string = 'Carlos';
  public apellidoPadre: string = 'Ortiz';

  public cambiarNombre(): void {
    this.nombrePadre = 'Pedro';
    this.apellidoPadre = 'Gonzalez';
  }

  public resetNombre(): void {
    this.nombrePadre = 'Carlos';
    this.apellidoPadre = 'Ortiz';
  }

  public recibirCompra(producto: string): void {
    console.log('Producto recibido:', producto);
  }

}
