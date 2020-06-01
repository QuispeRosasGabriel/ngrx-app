import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/store.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number;
  constructor(private store: Store<AppState>) {
    this.store.select("contador")
      .subscribe(contador => { this.contador = contador })
  }

  ngOnInit() {
  }

  reset() {
    // this.contador = this.contador - this.contador;
    // this.resetearContador.emit(this.contador)
    this.store.dispatch(actions.resetear())
  }
}
