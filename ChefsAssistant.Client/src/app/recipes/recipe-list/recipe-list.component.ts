import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Tiramisu', 'A delicious italian cake.', 'https://www.maxpixel.net/static/photo/1x/Meal-Delicious-Cake-Pie-Candy-Sweet-Dessert-4618227.jpg'),
    new Recipe('Italian Pizza', 'The real pizza from Italy', 'https://www.italian-feelings.com/wp-content/uploads/2019/10/PIAZZA-940x627.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
