import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar } from './contador.actions';
//crear estado inicial
export const initialState = 0;

//creando funcion privada (action-reducer)
const _contadorReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
);

//exportar la funcion con el action dentro
export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
