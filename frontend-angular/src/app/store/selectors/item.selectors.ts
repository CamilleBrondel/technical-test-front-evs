import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState } from '../reducers/item.reducer';

export const selectItemState = createFeatureSelector<ItemState>('items');

export const selectAllItems = createSelector(
  selectItemState,
  (state: ItemState) => state.items
);

export const selectItemError = createSelector(
  selectItemState,
  (state: ItemState) => state.error
);