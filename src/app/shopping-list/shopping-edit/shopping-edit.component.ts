import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  @Output() ingredientToAdd = new EventEmitter<Ingredient>();
  onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    this.ingredientToAdd.emit(new Ingredient(name.value, amount.valueAsNumber));
  }
  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    this.ingredientToAdd.emit(new Ingredient(ingName, ingAmount));
  }

}
