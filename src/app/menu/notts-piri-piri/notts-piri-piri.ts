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
          // image: '/images/piri/burger.png',
        },
        {
          name: 'NOTTS CHICKEN BOX',
          description:
            'Notts classic flame-grilled piri piri chicken served with spicy rice',
          prices: [
            { label: '1/4', price: 7.5 },
            { label: '1/2', price: 10.5 },
            { label: 'Full', price: 15 },
          ],
          // image: '/images/burger_fries.png',
        },
        {
          name: 'THE WRAP',
          description:
            'Chicken strips with tomato salsa, mayonnaise and lettuce in a tortilla wrap',
          prices: [
            { label: 'Regular', price: 5.5 },
            { label: 'Extra Strips', price: 2 },
          ],
          // image: '/images/The wrap.jpg',
        },
        {
          name: 'BBQ WRAP',
          description:
            'Flame grilled chicken strips with jalapeños, red onion, lettuce, mayo and BBQ sauce in tortilla',
          prices: [
            { label: 'Regular', price: 6.5 },
            { label: 'Extra Strips', price: 2 },
          ],
          // image: '/images/piri/bbq.png',
        },
      ],
    },

    {
      section: 'SIDES COLLECTION',
      items: [
        { name: '3 TENDER STRIPS', price: 3.5 },
        { name: '3 NOTTS WINGS', price: 3.5 },
        { name: 'MOZZARELLA STICKS', price: 3.5 },
        { name: 'CRISPY ONION RINGS', price: 2.5 },
        { name: 'NOTTS WEDGES', price: 2.5 },
        { name: 'SPICY RICE', price: 3.5 },
        { name: 'FRIES', price: 2.0 },
        { name: 'COLESLAW', price: 3.0 },
      ],
    },
  ]; 

}