import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza',
  imports: [NgFor, NgIf],
  
  templateUrl: './pizza.html',
  styleUrl: './pizza.css',
})

export class PizzaMenuComponent {
pizzas = [
    {
      name: 'Margherita',
      description: 'Cheese & Tomato',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 6.5 },
        { size: 'Large', price: 8.5 }
      ]
    },
    {
      name: 'Pepperoni Passion',
      description: 'Double pepperoni, double cheese',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ],
      hot: true
    },
    {
      name: 'Chicken Special',
      description: 'Tandoori chicken, jalapenos, mushroom, sweetcorn',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ]
    },
    {
      name: 'Hawaiian',
      description: 'Turkey ham & pineapple',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ]
    },
    {
      name: 'Tropical',
      description: 'Mushroom, turkey ham & pineapple',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ]
    },
    {
      name: 'Meat Feast',
      description: 'Beef, turkey ham, pepperoni, chicken',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ]
    },
    {
      name: 'BBQ',
      description: 'BBQ sauce base, red onion, green pepper, chicken',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ]
    },
    {
      name: 'Donner Pizza',
      description: 'Donner kebab, red onion, green pepper',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ]
    },
    {
      name: 'Notts Special',
      description: 'Mushroom, red onion, green pepper, jalapenos, beef, pepperoni, olives',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ],
      hot: true
    },
    {
      name: 'Vigi Hot',
      description: 'Jalapenos, onion, green pepper, mushrooms, sweetcorn',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ]
    },
    {
      name: 'Hot & Spicy',
      description: 'Chilli base, chicken tikka, jalapenos, red onion, pepperoni',
      prices: [
        { size: 'Small', price: 5.5 },
        { size: 'Medium', price: 7.0 },
        { size: 'Large', price: 9.5 }
      ],
      hot: true
    }
  ];

  // items = [
  //   {
  //     name: 'MARGHERITA',
  //     description: 'Cheese & Tomato',
  //     prices: [
  //       { size: 'Small', price: 5.0 },
  //       { size: 'Medium', price: 6.5 },
  //       { size: 'Large', price: 8.0 },
  //     ],
  //   },
  //   {
  //     name: 'PEPPERONI PASSION',
  //     description: 'Double pepperoni, double cheese',
  //     prices: [
  //       { size: 'Small', price: 5.5 },
  //       { size: 'Medium', price: 7.0 },
  //       { size: 'Large', price: 8.5 },
  //     ],
  //   },
  //   {
  //     name: 'CHICKEN SPECIAL',
  //     description: 'Tandoori chicken, jalapenos, mushroom',
  //     prices: [
  //       { size: 'Small', price: 5.5 },
  //       { size: 'Medium', price: 7.0 },
  //       { size: 'Large', price: 8.5 },
  //     ],
  //   },
  //   {
  //     name: 'MEAT FEAST',
  //     description: 'Beef, turkey ham, pepperoni, chicken',
  //     prices: [
  //       { size: 'Small', price: 5.5 },
  //       { size: 'Medium', price: 7.0 },
  //       { size: 'Large', price: 8.5 },
  //     ],
  //   },
  //   {
  //     name: 'BBQ',
  //     description: 'BBQ sauce, red onion, green pepper, chicken',
  //     prices: [
  //       { size: 'Small', price: 5.5 },
  //       { size: 'Medium', price: 7.0 },
  //       { size: 'Large', price: 8.5 },
  //     ],
  //   },
  // ];
}


