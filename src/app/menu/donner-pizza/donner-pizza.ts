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
      name: "Pepperoni Passion",
      description: "Cheese, pepperoni & tomato",
      prices: [
        { size: "7\"", price: 5.50 },
        { size: "9\"", price: 6.50 },
        { size: "12\"", price: 7.50 }
      ]
    },
    {
      name: "Margarita",
      description: "Cheese & tomato",
      prices: [
        { size: "7\"", price: 5.00 },
        { size: "9\"", price: 6.00 },
        { size: "12\"", price: 7.50 }
      ]
    },
     {
    name: "CHICKEN SPECIAL",
    description: "Tandoori Chicken, Jalapenos, Mushroom, Sweetcorn",
    prices: [
      { size: '7"', price: 5.50 },
      { size: '9"', price: 7.00 },
      { size: '12"', price: 8.50 }
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
    description: "Beef, Turkey Ham, Turkey Bacon, Pepperoni",
    prices: [
      { size: '7"', price: 6.00 },
      { size: '9"', price: 7.50 },
      { size: '12"', price: 9.50 }
    ]
  },
  {
    name: "BBQ",
    description: "BBQ Sauce base, Red Onion, Green Pepper, Chicken",
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
      { size: '7"', price: 6.00 },
      { size: '9"', price: 7.50 },
      { size: '12"', price: 9.50 }
    ]
  },
  {
    name: "VEGI HOT",
    description: "Jalapenos, Onion, Green Pepper, Mushrooms, Sweetcorn",
    prices: [
      { size: '7"', price: 5.50 },
      { size: '9"', price: 6.50 },
      { size: '12"', price: 8.50 }
    ]
  },
  {
    name: "HOT & SPICY",
    description: "Chilli Base, Chicken Tikka, Jalapenos, Onions, Pepperoni",
    prices: [
      { size: '7"', price: 5.50 },
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
  }    // I will extract ALL MENU ITEMS from your pictures
  ];


donners=[
  { name: "CHICKEN DONER WITH CHIPS", price: 8.00 },
  { name: "CHICKEN DONER WITH FRESH NAAN", price: 8.00 },
  { name: "CHICKEN DONER WITH CHIPS & CHEESE", price: 9.00 },
  { name: "MEAT DONER WITH CHIPS", price: 8.00 },
  { name: "MEAT DONER WITH FRESH NAAN", price: 8.00 },
  { name: "MEAT DONER WITH CHIPS & CHEESE", price: 9.00 },
  { name: "MIX KEBAB WITH CHIPS", price: 9.00 },
  { name: "MIX KEBAB WITH FRESH NAAN", price: 9.00 }
  ]
}

