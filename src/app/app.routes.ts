import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Header } from './header/header';
import { Contact } from './contact/contact';
import { About } from './about/about';

export const routes: Routes = [
 { path: '', component: Home},
    {path:'home', component:Home},
     {path:'header', component:Header},
   { path: 'contact', component: Contact },
   { path: 'about', component: About },
    // lazy loading handling folllowed here

    // for the menu
     {
 path: 'menu',
    children: [
      {
        path: 'donner-pizza',
        loadComponent: () =>
          import('./menu/donner-pizza/donner-pizza').then(m => m.DonnerPizza),
      },
      {
        path: 'burger-fries',
        loadComponent: () =>
          import('./menu/burger-fries/burger-fries').then(m => m.BurgerFries),
      },
      {
        path: 'notts-piri-piri',
        loadComponent: () =>
          import('./menu/notts-piri-piri/notts-piri-piri').then(m => m.NottsPiriPiri),
      },
      
      {
        path: '',
        redirectTo: 'donner-pizza',
        pathMatch: 'full',
      },
    ],
  },
  {
  path: 'contact',
  loadComponent: () =>
    import('./contact/contact').then(m => m.Contact),
},
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
];
