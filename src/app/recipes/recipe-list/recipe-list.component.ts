import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      '1 test Recipe',
      'This is simply a test',
      'https://media.self.com/photos/61e9dae8808d098c8ccc3b58/1:1/w_768,c_limit/15-Bean-Soup-Vegetarian.jpg'
    ),
    new Recipe(
      '2 test Recipe',
      'This is simply a test',
      'https://theschmidtywife.com/wp-content/uploads/2021/02/Featured_Homemade_Pizza-720x720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
