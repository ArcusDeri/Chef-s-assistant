import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  
  public recipeSelected = new EventEmitter<Recipe>();
  
  private recipes: Recipe[] = [
    new Recipe('Tiramisu', 'A delicious italian cake.', 'https://www.maxpixel.net/static/photo/1x/Meal-Delicious-Cake-Pie-Candy-Sweet-Dessert-4618227.jpg', [new Ingredient('Cococa', 1), new Ingredient('Milk', 1)]),
    new Recipe('Italian Pizza', 'The real pizza from Italy', 'https://www.italian-feelings.com/wp-content/uploads/2019/10/PIAZZA-940x627.jpg', [new Ingredient('Tomato', 5)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }
 
  public getRecipes() {
    // the array is new but object references are copied... not perfect.
    return this.recipes.slice();
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
