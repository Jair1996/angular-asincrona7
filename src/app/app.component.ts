import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numero: number = 0;
  openAlert: boolean = false;

  lanzarDado() {
    this.openAlert = false;
    const valor = this.getRandomNumber(1, 6);

    if (valor === this.numero) {
      this.openAlert = true;
      return;
    }

    this.numero = valor;
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
