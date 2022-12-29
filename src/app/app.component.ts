import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('btnDado') btnDado!: any;

  numero: number = 0;
  openAlert: boolean = false;

  lanzarDado() {
    this.btnDado.nativeElement.classList.add('rotate-scale-down');
    this.openAlert = false;

    const valor = this.getRandomNumber(1, 6);

    if (valor === this.numero) {
      this.openAlert = true;
      this.btnDado.nativeElement.classList.remove('rotate-scale-down');
      return;
    }

    setTimeout(() => {
      this.numero = valor;
      this.btnDado.nativeElement.classList.remove('rotate-scale-down');
    }, 1000);
  }

  private getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
