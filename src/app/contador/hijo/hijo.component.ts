import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number;
  constructor(private store: Store<AppState>) {
    this.store.select("contador")
      .subscribe(contador => this.contador = contador)
  }

  ngOnInit() {
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 2 }))
    // this.contador = this.contador * 2
    // this.cambioContador.emit(this.contador)
  }

  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }))

    // this.contador = this.contador / 2
    // this.cambioContador.emit(this.contador)

  }
}
