import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.scss',
  templateUrl: './hijo.html',
})
export class Hijo {

  nombre = input.required<string>();
  comprar = output<string>();

  public enviarCompra(): void {
    this.comprar.emit('MacBook Pro');
  }

}
