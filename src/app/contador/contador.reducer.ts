import { createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, resetear, multiplicar, dividir } from './contador.actions';
//crear estado inicial
export const initialState = 0;

//creando funcion privada (action-reducer)
const _contadorReducer = createReducer(initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
  on(resetear, state => state - state),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero),
);

//exportar la funcion con el action dentro
export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
