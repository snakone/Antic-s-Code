import { Category, Place } from './interfaces/interfaces';

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

export const PLACES: Place[] = [
  {
    name: 'London, UK',
    picture: 'place1.jpg'
  },
  {
    name: 'New York',
    picture: 'place2.png'
  },
  {
    name: 'Sydney',
    picture: 'place3.png'
  },
  {
    name: 'Paris, France',
    picture: 'place4.png'
  }
];

export const COUNTRIES = [
  'Dubai (45)',
  'Melbourne (95)',
  'Sydney (90)',
  'Brisbane (73)',
  'Perth (97)',
  'Toronto (960)',
  'Vancouver (46)',
  'Montreal (46)',
  'Calgary (16)',
  'Edmonton (6)',
  'Ottawa (53)',
  'Atlantic Canada (83)',
  'Berlin (71)',
  'Munich (46)',
  'Hamburg Area (727)',
  'Frankfurt Area (655)',
  'Stuttgart Area (9)',
  'Barcelona (46)',
  'Madrid (790)',
  'Spain (52)',
  'Dublin (657)',
  'Galway (12)',
  'Limerick (6)',
  'Tokyo, JP (24)',
  'Kanagawa (276)',
  'Osaka (146)',
  'Kyoto (70)',
  'Nagoya (64)',
  'Mexico City (195)',
  'Cancun (328)',
  'Monterrey (27)',
  'Baja California Sur (42)',
  'Amsterdam (446)',
  'Maastricht (3)',
  'London (25)',
  'Yorkshire (967)',
  'Edinburgh (923)',
  'Kent (80)',
  'Manchester (60)',
  'Glasgow (52)'
];



