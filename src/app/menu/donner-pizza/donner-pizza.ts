import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-donner-pizza',
  standalone: true,
  imports: [NgFor,],
  templateUrl:'./donner-pizza.html',
  styleUrls: ['./donner-pizza.css'],
})
export class DonnerPizza {



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
freshShishKebabs = [
  { name: 'CHICKEN SHISH', price: 4.95 },
  { name: 'CHICKEN SHISH WITH NAAN', price: 4.95 },
  { name: 'CHICKEN SHISH WITH RICE', price: 4.95 },
  { name: 'CHICKEN SHISH WITH WRAP', price: 6.95 },

  { name: 'SEEKH KEBAB WITH FRESH NAAN', price: 5.50 },
  { name: 'SEEKH KEBAB WITH RICE', price: 5.95 },
  { name: 'SEEKH KEBAB WITH WRAP', price: 5.50 },

  { name: '1 FRESH SEEKH KEBAB', price: 1.95 }
];

}

