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

    /* ================= BURGERS ================= */
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

    /* ========== BURGER & SEEKH KEBAB DEALS ========== */
    {
      section: 'BURGER & SEEKH KEBAB DEALS',
      items: [
        {
          name: 'Notts Special Seekh Kebab',
          description: 'With Wrap',
          price: 5.00,
        },
        {
          name: 'Notts Special Seekh Kebab',
          description: 'With Naan',
          price: 6.00,
        },
        {
          name: '1/4lb Cheese Burger',
          description: 'With chips & drink',
          price: 6.00,
        },
        {
          name: '1/2lb Cheese Burger',
          description: 'With chips & drink',
          price: 7.00,
        },
        {
          name: 'Spicy Chicken Burger',
          description: 'With chips & drink',
          price: 6.00,
        },
        {
          name: 'Spicy Chicken Burger',
          description: 'simple',
          price: 4.00,
        },
        {
          name: 'Chicken Burger',
          description: 'With chips & drink',
          price: 6.00,
        },
        {
          name: 'Veggie Burger',
          description: 'With chips & drink',
          price: 5.50,
        },
      ]
    },

    /* ================= EXTRAS ================= */
    {
      section: 'EXTRAS',
      items: [
        { name: 'Chips (Small)', price: 2.50 },
        { name: 'Chips (Medium)', price: 3.00 },
        { name: 'Chips (Large)', price: 4.00 },

        { name: 'Chips with Cheese', price: 3.00 },
        { name: 'Chips with Curry', price: 3.00 },
        { name: 'Chips with Gravy', price: 3.00 },

        { name: '6 Nuggets & Chips', price: 4.50 },
        { name: '8 Nuggets & Chips', price: 5.50 },
        { name: '12 Nuggets & Chips', price: 8.00 },

        { name: 'Potato Wedges', price: 2.50 },
        { name: 'Potato Wedges & Cheese', price: 4.00 },

        { name: 'Mix Salad', price: 3.00 },
        { name: 'Meat Doner Cob', price: 4.00 },
        { name: 'Chicken Doner Cob', price: 4.00 },

        { name: '5 Onion Rings', price: 1.50 },
        { name: '5 Mozzarella Sticks', price: 3.00 },

        { name: '3 Chicken Strips with Fries', price: 4.50 },
        { name: '6 Chicken Strips with Fries', price: 6.50 },
      ]
    },

    /* ================= SPECIAL DEAL ================= */
    {
      section: 'NOTTS SPECIAL DEAL',
      items: [
        {
          name: '7" Margherita Pizza',
          description: 'With chips & drink',
          price: 7.50,
        }
      ]
    },

    /* ================= DRINKS ================= */
    {
      section: 'DRINKS',
      items: [
        {
          name: 'Can (330ml)',
          description: 'Coke, Diet Coke, 7up, Fanta, Sprite',
          price: 1.50
        },
        {
          name: 'Bottle (1.5ltr)',
          description: 'Coke, Diet Coke, 7up, Fanta, Sprite',
          price: 3.50
        },
        { name: 'Bottle of Water', price: 1.00 },
      ]
    },

    /* ================= SAUCES ================= */
    {
      section: 'SAUCES',
      items: [
        {
          name: 'Sweet Chilli / Garlic / BBQ / Ketchup / Mayo / Burger Sauce',
          price: 0.50
        }
      ]
    }

  ];
}
