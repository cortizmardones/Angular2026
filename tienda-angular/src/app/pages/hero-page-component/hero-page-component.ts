import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-page-component',
  styleUrl: './hero-page-component.scss',
  templateUrl: './hero-page-component.html',
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  public getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  public changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  public resetForm(): void {
    this.name.set('Ironman'); 
    this.age.set(45);
  }

  public changeAge(): void {
    this.age.set(60);
  }

}
