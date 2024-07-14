import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ItemService } from '../../services/item.service';
import { loadItems, loadItemsSuccess, loadItemsFailure, addItem, addItemSuccess, addItemFailure } from '../actions/item.actions';

@Injectable()
export class ItemEffects {
  constructor(private actions$: Actions, private itemService: ItemService) {}

  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() =>
        this.itemService.getItems().pipe(
          map(items => loadItemsSuccess({ items })),
          catchError(error => of(loadItemsFailure({ error })))
        )
      )
    )
  );

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addItem),
      mergeMap(action =>
        this.itemService.addItem(action.item).pipe(
          map(item => addItemSuccess({ item })),
          catchError(error => of(addItemFailure({ error })))
        )
      )
    )
  );
}