import { Component, OnInit } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Item } from '../../models/item.model';
import { loadItems } from '../../store/actions/item.actions';
import { selectAllItems, selectItemError } from '../../store/selectors/item.selectors';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.less'
})

export class ItemListComponent implements OnInit {
  items$: Observable<Item[]>;
  error$: Observable<any>;
  //items: Item[] = [];

  constructor(private store: Store) {
    this.items$ = this.store.select(selectAllItems);
    this.error$ = this.store.select(selectItemError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadItems());
  }
}