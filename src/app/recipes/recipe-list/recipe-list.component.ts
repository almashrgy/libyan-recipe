import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe'
import {EventEmitter} from "@angular/common/src/facade/async";
@Component({
  selector: 'lr-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[]=[];
 @Output() recipeSelected = new EventEmitter<Recipe>();
 recipe = new Recipe('dummy', 'dummy','https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bazin.jpg/220px-Bazin.jpg');
  constructor() { }

  ngOnInit() {
  }
onSelected(recipe: Recipe) {
this.recipeSelected.emit(recipe);
}
}
