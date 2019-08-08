import { Category, List, Testimonial, FooterList, MenuLink, FAQ, Related, ToC } from './interfaces/interfaces';

export const MENU: MenuLink[] = [
  { name: 'Home', link: '/home' },
  { name: 'Code', link: '/code' },
  { name: 'Categories', link: '/categories' },
  { name: 'Articles', link: '/articles' }
];

export const CATEGORIES: string[] = [
  'Code',
  'Video',
  'Gaming',
  'Lifestyle',
  'Interview',
  'Review',
  'Antic'
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
  }
];

export const PLACES: List[] = [
  { name: 'London, UK', picture: 'place1.jpg' },
  { name: 'New York', picture: 'place2.png' },
  { name: 'Sydney', picture: 'place3.png' },
  { name: 'Paris, France', picture: 'place4.png'}
];

export const COUNTRIES: string[] = [
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

export const TESTIMONIALS: Testimonial[] = [
  {
    avatar: 'a1.jpg',
    name: 'Francis Burton',
    location: 'Toronto, Canada',
    testimonial: `Excepteur sint occaecat cupidatat non
                  proident sunt in culpa officia deserunt
                  mollit anim laborum sint occaecat cupidatat non proident.
                  Occaecat cupidatat non proident culpa officia deserunt mollit.`
  },
  {
    avatar: 'a1.jpg',
    name: 'Ulises Prieto',
    location: 'Barcelona, Spain',
    testimonial: `Excepteur sint occaecat cupidatat non
                  proident sunt in culpa officia deserunt
                  mollit anim laborum sint occaecat cupidatat non proident.
                  Occaecat cupidatat non proident culpa officia deserunt mollit.`
  },
  {
    avatar: 'a1.jpg',
    name: 'Alex Arriaga',
    location: 'México DC',
    testimonial: `Excepteur sint occaecat cupidatat non
                  proident sunt in culpa officia deserunt
                  mollit anim laborum sint occaecat cupidatat non proident.
                  Occaecat cupidatat non proident culpa officia deserunt mollit.`
  }
];

export const LOGOS: List[] = [
  { name: 'Vanilla Javascript', picture: 'javascript-logo.png' },
  { name: 'Markup HTML5', picture: 'html-logo.png' },
  { name: 'Stylesheet CSS3', picture: 'css-logo.png' },
  { name: 'Angular Framework', picture: 'angular-logo.png' },
  { name: 'Server Javascript', picture: 'node-logo.png' },
  { name: 'Mongo Database', picture: 'mongo-logo.png' }
];

export const FOOTER_LIST: FooterList[] = [
  {
    title: 'Company Info',
    list: ['About Us', 'Contact Us', 'Support', 'Privacy Policy']
  },
  {
    title: 'Helpful Links',
    list: ['Join Direo', 'How it Work', 'Advantages', 'Packages']
  },
  {
    title: 'Connect with Us',
    list: ['Contact Support', 'Twitter', 'Facebook', 'Youtube']
  }
];

export const CATEGORY_INFO: List[] = [
  {
    name: '25 East Valley Road, Michigan',
    picture: 'place'
  },
  {
    name: '(213) 995-7799',
    picture: 'phone'
  },
  {
    name: 'support@aazztech.com',
    picture: 'email'
  },
  {
    name: 'http://anticscode.epizy.com',
    picture: 'public'
  }
];

export const TAGS: string[] = [
  'New York',
  'Car Parking',
  'Food',
  'Travelling',
  'Home',
  'Office',
  'Restaurant',
  'Bike Parking'
];

export const FAQS: FAQ[] = [
  {
    question: 'Question number one',
    answer: `Ensuring productivity and growth is essential
             for architecture and engineering teams. The industry requires a
             high level of precision, full legal compliance`
  },
  {
    question: 'Question number two',
    answer: `Ensuring productivity and growth is essential
             for architecture and engineering teams. The industry requires a
             high level of precision, full legal compliance`
  },
  {
    question: 'Question number three',
    answer: `Ensuring productivity and growth is essential
             for architecture and engineering teams. The industry requires a
             high level of precision, full legal compliance`
  }
];

export const RELATED_ARTICLES: Related[] = [
  {
    title: 'Clothing Shopping Mall',
    picture: 'sl1.jpg',
    category: 'Food & Drink',
    icon: 'restaurant'
  },
  {
    title: 'Flanders Heat & Air Systems',
    picture: 'sl2.jpg',
    category: 'Hotel & Travel',
    icon: 'hotel'
  },
  {
    title: 'Favorite Place Fog Bank',
    picture: 'sl3.jpg',
    category: 'Art & History',
    icon: 'account_balance'
  },
  {
    title: 'Favortie Place on Summer',
    picture: 'sl4.jpg',
    category: 'Shopping',
    icon: 'flight_takeoff'
  }
];

export const CATEGORY_TOC: ToC[] = [
  {
    index: 'Introduction',
    description: 'A brief introduction',
    anchor: 'cat-intro'
  },
  {
    index: 'Concepts',
    description: 'Technology concepts',
    anchor: 'cat-concept'
  },
  {
    index: 'Examples',
    description: 'Learning bit a bit',
    anchor: 'cat-examples'
  },
  {
    index: 'FAQ\'s',
    description: 'Frequently asked questions',
    anchor: 'cat-faq'
  },
];











