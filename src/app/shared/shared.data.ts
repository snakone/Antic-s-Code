import { Category } from './interfaces/interfaces';

export const MENU = [
  { name: 'Home' },
  { name: 'Code' },
  { name: 'Articles' },
  { name: 'Tutorials' }
];

export const POPULAR_CATEGORIES: Category[] = [
  {
    name: 'Restaurants',
    icon: 'restaurant_menu',
    class: 'icon-pink'
  },
  {
    name: 'Places',
    icon: 'place',
    class: 'icon-green'
  },
  {
    name: 'Shooping',
    icon: 'shopping_cart',
    class: 'icon-orange'
  },
  {
    name: 'Hotels',
    icon: 'hotel',
    class: 'icon-red'
  },
];

export const MAIN_CATEGORIES: Category[] = [
  {
    name: 'Restaurants',
    icon: 'restaurant_menu',
    picture: 'cat1.jpg'
  },
  {
    name: 'Places & Destination',
    icon: 'place',
    picture: 'cat2.jpg'
  },
  {
    name: 'Shooping',
    icon: 'shopping_cart',
    picture: 'cat3.jpg'
  },
  {
    name: 'Art & History',
    icon: 'account_balance',
    picture: 'cat4.jpg'
  },
  {
    name: 'Hotel & Travel',
    icon: 'hotel',
    picture: 'cat5.jpg'
  },
  {
    name: 'Food & Drink',
    icon: 'fastfood',
    picture: 'cat6.jpg'
  },
];

