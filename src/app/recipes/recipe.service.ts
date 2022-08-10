import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza Margherita 🍕',
      'The best homemade Margherita!',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        new Ingredient('Parmigiano-reggiano cheese', 2),
        new Ingredient('Mozzarella cheese', 2),
        new Ingredient('Basil leaves', 5),
        new Ingredient('Dried red pepper flakes', 0.5),
      ]
    ),
    new Recipe(
      'Lasagna 🥩',
      " Simply the world's best Lasagna",
      'https://www.inspiredtaste.net/wp-content/uploads/2022/06/Cheese-Lasagna-Recipe-5-1200-1200x800.jpg',
      [
        new Ingredient('Onion', 2),
        new Ingredient('Garlic', 2),
        new Ingredient('Tomatoes', 1),
        new Ingredient('Tomato paste cans', 2),
        new Ingredient('Beef', 1),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}