import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-page-component',
  styleUrl: './counter-page-component.scss',
  templateUrl: './counter-page-component.html',
})
export class CounterPageComponent {

  public counter: number = 10;
  public counterSignal = signal(10);

  public aumentar(value: number): void {
    this.counter = this.counter + value;
    this.counterSignal.update(valorActual => valorActual + value);
  }

  public decrementar(value: number): void {
    if (this.counter <= 1) {
      return;
    }
    this.counter = this.counter - value;
    this.counterSignal.update(valorActual => valorActual - value);
  }

  public reset(): void {
    this.counter = 10;
    this.counterSignal.set(10);
  }

}
