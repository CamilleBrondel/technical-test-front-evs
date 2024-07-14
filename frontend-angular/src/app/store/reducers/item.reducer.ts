import { createReducer, on } from '@ngrx/store';
import { loadItemsSuccess, loadItemsFailure, addItemSuccess, addItemFailure } from '../actions/item.actions';
import { Item } from '../../models/item.model';

export interface ItemState {
  items: Item[];
  error: any;
}

export const initialState: ItemState = {
  items: [],
  error: null
};

const _itemReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
  on(loadItemsFailure, (state, { error }) => ({ ...state, error })),
  on(addItemSuccess, (state, { item }) => ({ ...state, items: [...state.items, item] })),
  on(addItemFailure, (state, { error }) => ({ ...state, error }))
);

export function itemReducer(state:any, action:any) {
  return _itemReducer(state, action);
}