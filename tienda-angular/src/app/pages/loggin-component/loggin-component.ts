import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-loggin-component',
  styleUrl: './loggin-component.scss',
  templateUrl: './loggin-component.html',
})
export class LogginComponent {

  public email: string = 'cortizmardones@gmail.com';
  public password: string = '123456';

  constructor(private router: Router) { }

  public auth(email: string, password: string): void {
    console.log('Email:', email);
    console.log('Password:', password);

    this.router.navigate(["/all"]);

  }


}
