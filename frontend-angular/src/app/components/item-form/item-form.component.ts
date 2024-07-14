import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addItem } from '../../store/actions/item.actions';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.less'
})
export class ItemFormComponent {
  @Input() isOpen:boolean = false;
  @Output() closePopupEvent = new EventEmitter<string>();

  @HostListener('window:keydown.escape') escapeEvent (event: KeyboardEvent) { this.closeForm(); }

  itemForm = new FormGroup({
    name: new FormControl(''),
  })

  constructor(private fb: FormBuilder, private store: Store) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  closeForm(){
    this.isOpen = false;
    this.closePopupEvent.emit();
  }

  addItem(){
    if (this.itemForm.valid) {
      const newItem: Item = {
        id: 0, // The id will be set by the backend or database
        name: this.itemForm.value.name || ""
      };
      this.store.dispatch(addItem({ item: newItem }));
      this.itemForm.reset();
    }
  }
}
