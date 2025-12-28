import { Component } from '@angular/core';

interface DealItem {
  name: string;
  description?: string;
  price: number;
  image?: string;
}

interface MenuSection {
  section: string;
  items: DealItem[];
}

@Component({
  selector: 'app-burger-fries',
  imports: [],
  templateUrl: './burger-fries.html',
  styleUrl: './burger-fries.css',
})
export class BurgerFries {
 menu: MenuSection[] = [

    {
      section: 'BURGERS',
      items: [
        { name: 'Chicken Burger', price: 4.00 },
        { name: 'Spicy Chicken Burger', price: 4.00 },
        { name: '1/4 Cheese Burger', price: 4.00 },
        { name: '1/2 Cheese Burger', price: 5.00 },
        { name: 'Veggie Burger', price: 3.50 },
      ]
    },

    {
      section: 'BURGER DEALS',
      items: [
        {
          name: '1/4lb Cheese Burger',
          description: 'With chips & drink',
          price: 6.00,
          // image: '/images/burger/deal1.png'
        },
        {
          name: '1/2lb Cheese Burger',
          description: 'With chips & drink',
          price: 7.00,
          // image: '/images/burger/deal2.png'
        },
        {
          name: 'Spicy Chicken Burger',
          description: 'With chips & drink',
          price: 6.00,
          // image: '/images/burger/deal3.png'
        },
        {
          name: 'Veggie Burger',
          description: 'With chips & drink',
          price: 5.50,
          // image: '/images/burger/deal4.png'
        }
      ]
    },

    {
      section: 'EXTRAS',
      items: [
        { name: 'Chips', price: 2.50 },
        { name: 'Chips with Cheese', price: 3.00 },
        { name: 'Chips with Curry', price: 3.00 },
        { name: 'Chips with Gravy', price: 3.00 },
        { name: '6 Nuggets & Chips', price: 4.50 },
        { name: '8 Nuggets & Chips', price: 5.50 },
        { name: '12 Nuggets & Chips', price: 8.00 },
        { name: 'Potato Wedges', price: 2.50 },
        { name: 'Potato Wedges & Cheese', price: 4.00 },
      ]
    },

    {
      section: 'DRINKS',
      items: [
        { name: 'Cans (330ml)', price: 1.50 },
        { name: 'Bottle (1.5ltr)', price: 3.50 },
        { name: 'Bottle of Water', price: 1.00 },
      ]
    },

    {
      section: 'SAUCES',
      items: [
        { name: 'BBQ / Ketchup / Mayo / Garlic', price: 0.50 }
      ]
    }

  ];
}
