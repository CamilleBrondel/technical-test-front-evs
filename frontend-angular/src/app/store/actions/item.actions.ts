import { createAction, props } from '@ngrx/store';
import { Item } from '../../models/item.model';

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction('[Item] Load Items Success', props<{ items: Item[] }>());
export const loadItemsFailure = createAction('[Item] Load Items Failure', props<{ error: any }>());

export const addItem = createAction('[Item] Add Item', props<{ item: Item }>());
export const addItemSuccess = createAction('[Item] Add Item Success', props<{ item: Item }>());
export const addItemFailure = createAction('[Item] Add Item Failure', props<{ error: any }>());