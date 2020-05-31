import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  @Input() contador: number;
  @Output() resetearContador = new EventEmitter<number>()
  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.contador = this.contador - this.contador;
    this.resetearContador.emit(this.contador)
  }
}
