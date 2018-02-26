import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test','Test desc','https://i.ytimg.com/vi/3n87Tbu5A9M/maxresdefault.jpg'),
    new Recipe('A test','Test desc','https://i.ytimg.com/vi/3n87Tbu5A9M/maxresdefault.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

}
