import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-donner-pizza',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl:'./donner-pizza.html',
  styleUrls: ['./donner-pizza.css'],
})
export class DonnerPizza {
 items = [
  {
    name: "PEPPERONI PASSION",
    description: "Double Pepperoni, Double Cheese",
    prices: [
      { size: '7"', price: 5.50 },
      { size: '9"', price: 6.50 },
      { size: '12"', price: 8.00 }
    ]
  },
  {
    name: "MARGARITA",
    description: "Cheese & Tomato",
    prices: [
      { size: '7"', price: 5.00 },
      { size: '9"', price: 6.00 },
      { size: '12"', price: 8.00 }
    ]
  },
  {
    name: "CHICKEN SPECIAL",
    description: "Tandoori Chicken, Jalapenos, Mushroom, Sweetcorn",
    prices: [
      { size: '7"', price: 5.50 },
      { size: '9"', price: 7.00 },
      { size: '12"', price: 9.00 }
    ]
  },
  {
    name: "HAWAIIAN",
    description: "Turkey Ham & Pineapple",
    prices: [
      { size: '7"', price: 5.00 },
      { size: '9"', price: 6.50 },
      { size: '12"', price: 8.00 }
    ]
  },
  {
    name: "TROPICAL",
    description: "Mushroom, Turkey Ham & Pineapple",
    prices: [
      { size: '7"', price: 5.50 },
      { size: '9"', price: 6.50 },
      { size: '12"', price: 8.00 }
    ]
  },
  {
    name: "MEAT FEAST",
    description: "Beef, Turkey Ham, Turkey Bacon, Pepperoni, Chicken",
    prices: [
      { size: '7"', price: 6.00 },
      { size: '9"', price: 8.00 },
      { size: '12"', price: 10.00 }
    ]
  },
  {
    name: "BBQ",
    description: "BBQ Sauce Base, Red Onion, Green Pepper, Chicken",
    prices: [
      { size: '7"', price: 5.50 },
      { size: '9"', price: 7.00 },
      { size: '12"', price: 8.50 }
    ]
  },
  {
    name: "DONNER PIZZA",
    description: "Donner Kebab, Red Onion, Green Pepper",
    prices: [
      { size: '7"', price: 5.50 },
      { size: '9"', price: 7.00 },
      { size: '12"', price: 8.50 }
    ]
  },
  {
    name: "NOTTS SPECIAL",
    description: "Mushroom, Red Onion, Green Pepper, Jalapenos, Beef, Pepperoni, Olives",
    prices: [
      { size: '7"', price: 7.00 },
      { size: '9"', price: 8.50 },
      { size: '12"', price: 10.00 }
    ]
  },
  {
    name: "VEGI HOT",
    description: "Jalapenos, Onion, Green Pepper, Mushrooms, Sweetcorn",
    prices: [
      { size: '7"', price: 6.00 },
      { size: '9"', price: 7.00 },
      { size: '12"', price: 8.50 }
    ]
  },
  {
    name: "HOT & SPICY",
    description: "Chilli Base, Chicken Tikka, Jalapenos, Onions, Pepperoni",
    prices: [
      { size: '7"', price: 6.00 },
      { size: '9"', price: 7.00 },
      { size: '12"', price: 8.50 }
    ]
  },
  {
    name: "GARLIC BREAD",
    description: "",
    prices: [
      { size: '7"', price: 4.50 },
      { size: '9"', price: 5.50 },
      { size: '12"', price: 6.00 }
    ]
  },
  {
    name: "GARLIC BREAD WITH CHEESE",
    description: "",
    prices: [
      { size: '7"', price: 5.00 },
      { size: '9"', price: 6.00 },
      { size: '12"', price: 7.00 }
    ]
  },
  {
    name: "EXTRA TOPPINGS",
    description: "",
    prices: [
      { size: '7"', price: 0.50 },
      { size: '9"', price: 1.00 },
      { size: '12"', price: 1.50 }
    ]
  }
];



donners = [
  { name: "CHICKEN DONER WITH CHIPS", price: 8.00 },
  { name: "CHICKEN DONER WITH FRESH NAAN", price: 8.00 },
  { name: "CHICKEN DONER WITH CHIPS & CHEESE", price: 9.00 },
  { name: "MEAT DONER WITH CHIPS", price: 8.00 },
  { name: "MEAT DONER WITH FRESH NAAN", price: 8.00 },
  { name: "MEAT DONER WITH CHIPS & CHEESE", price: 10.00 },
  { name: "MIX KEBAB WITH CHIPS", price: 9.00 },
  { name: "MIX KEBAB WITH FRESH NAAN", price: 9.00 },
  { name: "CHICKEN DONER WITH RICE", price: 8.00 },
  { name: "MEAT DONER WITH RICE", price: 8.00 },
  { name: "DONER MEAT WITH CHEESE & CURRY", price: 10.00 },
  { name: "DONER MEAT WITH CHEESE & GRAVY", price: 10.00 },
  { name: "CHICKEN DONER WITH CHEESE & CURRY", price: 10.00 },
  { name: "CHICKEN DONER WITH CHEESE & GRAVY", price: 10.00 }
];
wraps = [
  { name: "CHICKEN DONER WRAP", price: 5.00 },
  { name: "MEAT DONER WRAP", price: 5.00 },
  { name: "MIX DONER WRAP", price: 6.00 },
  { name: "CHICKEN STRIP WRAP", price: 5.00 },
  { name: "HALLOUMI WRAP", price: 5.00 }
];

}

