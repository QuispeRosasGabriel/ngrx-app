import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from "./interfaces/store.interface"
import * as actions from './contador/contador.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-app';
  contador: number;

  //inyectando el store
  constructor(private store: Store<AppState>) {
    this.store.select("contador")
      .subscribe(contador => this.contador = contador)
  }

  incrementar() {
    this.store.dispatch(actions.incrementar())
  }

  decrementar() {
    this.store.dispatch(actions.decrementar())

  }

}
