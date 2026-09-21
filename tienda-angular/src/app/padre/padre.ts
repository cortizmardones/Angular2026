import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [Hijo],
  selector: 'app-padre',
  styleUrl: './padre.scss',
  templateUrl: './padre.html',
})
export class Padre {

  public nombreUsuario: string = 'Carlos';

  public cambiarNombre(): void {
    this.nombreUsuario = 'Pedro';
  }

  public recibirCompra(producto: string): void {
    console.log('Producto recibido:', producto);
  }

}
