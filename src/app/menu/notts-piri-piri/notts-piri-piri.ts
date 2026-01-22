import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FullItem {
  name: string;
  description: string;
  prices: { label: string; price: number }[];
  // image: string;
}

interface SimpleItem {
  name: string;
  price: number;
}

type MenuItem = FullItem | SimpleItem;

@Component({
  selector: 'app-notts-piri-piri',
 
   imports: [CommonModule],
  templateUrl: './notts-piri-piri.html',
  styleUrl: './notts-piri-piri.css',
})
export class NottsPiriPiri {

 menu: {
  section: string;
  items: MenuItem[];
}[] = [

  /* ================= PIRI PIRI SPECIAL ================= */
  {
    section: 'NOTTS PIRI PIRI SPECIAL',
    items: [
      {
        name: 'PERI PERI CHICKEN BURGER',
        description:
          'Flame-grilled chicken breast marinated with our famous peri peri flavours in a soft flour bun',
        prices: [
          { label: 'Single', price: 5.5 },
          { label: 'Double', price: 7.5 },
        ],
      },
      {
        name: 'NOTTS CHICKEN BOX',
        description:
          'Classic flame-grilled peri peri chicken served with spicy rice',
        prices: [
          { label: '1/4', price: 7.5 },
          { label: '1/2', price: 10.5 },
          { label: 'Full', price: 15 },
        ],
      },
      {
        name: 'THE WRAP',
        description:
          'Chicken strips with tomato salsa, mayo and lettuce in a tortilla wrap',
        prices: [
          { label: 'Regular', price: 5.5 },
          { label: 'Extra Strips', price: 2 },
        ],
      },
      {
        name: 'BBQ WRAP',
        description:
          'Flame grilled chicken strips with jalapeños, red onion, lettuce, mayo and BBQ sauce',
        prices: [
          { label: 'Regular', price: 6.5 },
          { label: 'Extra Strips', price: 2 },
        ],
      },
    ],
  },

  /* ================= NOTTS ORIGINAL ================= */
  {
    section: 'NOTTS ORIGINAL',
    items: [
      {
        name: 'Flame Grilled Chicken',
        description: 'Notts legendary flame-grilled peri peri chicken',
        prices: [
          { label: 'Quarter', price: 4.95 },
          { label: 'Half', price: 7.95 },
          { label: 'Whole', price: 12.95 },
        ],
      },
    ],
  },

  /* ================= TENDER STRIPS ================= */
  {
    section: 'TENDER STRIPS',
    items: [
      {
        name: 'Tender Strips',
        description: 'Succulent peri peri chicken strips',
        prices: [
          { label: '6 Strips', price: 5.5 },
          { label: '10 Strips', price: 8.5 },
        ],
      },
    ],
  },

  /* ================= NOTTS WINGS ================= */
  {
    section: 'NOTTS WINGS',
    items: [
      {
        name: 'Notts Wings',
        description: 'Classic peri peri chicken wings',
        prices: [
          { label: '6 Wings', price: 5.5 },
          { label: '10 Wings', price: 8.5 },
        ],
      },
    ],
  },

  /* ================= PLATTERS ================= */
  {
    section: 'NOTTS PLATTERS',
    items: [
      {
        name: 'Single Platter',
        description: '1/4 chicken, 3 wings, fries & dip',
        prices: [{ label: 'Price', price: 9.0 }],
      },
      {
        name: 'Double Platter',
        description: '1/2 chicken, 3 wings, 2 fries & 2 dips',
        prices: [{ label: 'Price', price: 14.0 }],
      },
      {
        name: 'Notts Wings Platter',
        description: '16 wings, 2 sides & 2 dips',
        prices: [{ label: 'Price', price: 16.0 }],
      },
    ],
  },

  /* ================= FAMILY & MEGA MIX ================= */
  {
    section: 'FAMILY & MEGA MIX',
    items: [
      {
        name: 'Notts Family',
        description: '1 whole chicken, 4 wings, 3 sides & 4 dips',
        prices: [{ label: 'Price', price: 20.0 }],
      },
      {
        name: 'Mega Mix Platter',
        description: '2 whole chickens, 10 wings, 4 sides & 6 dips',
        prices: [{ label: 'Price', price: 38.0 }],
      },
    ],
  },

  /* ================= BUTTERFLY CHICKEN ================= */
  {
    section: 'NOTTS BUTTERFLY CHICKEN',
    items: [
      {
        name: 'Butterfly Chicken',
        description: 'Boneless butterfly chicken breast, 1 side & 1 dip',
        prices: [{ label: 'Price', price: 10.0 }],
      },
    ],
  },

  /* ================= SIDES ================= */
  {
    section: 'SIDES COLLECTION',
    items: [
      { name: '3 Tender Strips', price: 3.5 },
      { name: '3 Notts Wings', price: 3.5 },
      { name: 'Mozzarella Sticks', price: 3.0 },
      { name: 'Crispy Onion Rings', price: 2.5 },
      { name: 'Notts Wedges', price: 2.5 },
      { name: 'Spicy Rice', price: 3.5 },
      { name: 'Fries', price: 3.0 },
      { name: 'Coleslaw', price: 3.0 },
    ],
  },
];


}