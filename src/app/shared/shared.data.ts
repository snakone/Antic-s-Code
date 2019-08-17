import {
  Category,
  List,
  Testimonial,
  FooterList,
  MenuLink,
  FAQ,
  Related,
  ToC
} from './interfaces/interfaces';

export const MENU: MenuLink[] = [
  { name: 'Home', link: '/home' },
  { name: 'Code', link: '/code' },
  { name: 'Categories', link: '/categories' },
  { name: 'Articles', link: '/articles' }
];

export const CATEGORIES: string[] = [
  'HTML',
  'CSS',
  'Javascript',
  'Angular',
  'Nodejs',
  'MongoDB'
];

export const TAGS: string[] = [
  'Development',
  'Typescript',
  'Frontend',
  'Backend',
  'Design',
  'SCSS',
  'Ionic',
  'Database'
];

export const CODE_TAGS: string[] = [
  'Consola',
  'Comando',
  'Javascript',
  'Nodejs',
  'Design',
  'CSS',
  'SCSS',
  'Angular',
  'Material',
  'Ionic',
  'Database',
  'Config'
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
    name: 'Markup HTML5',
    icon: 'html-logo.png',
    picture: 'angular.png'
  },
  {
    name: 'Stylesheet CSS3',
    icon: 'css-logo.png',
    picture: 'angular.png'
  },
  {
    name: 'Vanilla Javascript',
    icon: 'javascript-logo.png',
    picture: 'angular.png'
  },
  {
    name: 'Angular Framework',
    icon: 'angular-logo.png',
    picture: 'angular.png'
  },
  {
    name: 'Server Javascript',
    icon: 'node-logo.png',
    picture: 'angular.png'
  },
  {
    name: 'Mongo Database',
    icon: 'mongo-logo.png',
    picture: 'angular.png'
  }
];

export const PAGE_BG = {
  code: 'https://media0.giphy.com/media/l3q2XB76CaWPggiNW/giphy.gif',
  categories: 'https://media2.giphy.com/media/hLzncGRSaC5Nu/giphy.gif',
  articles: 'https://media0.giphy.com/media/xUA7bgk0V4eUyNVaAo/giphy.gif',
  article: 'https://media2.giphy.com/media/b93B4aJQQakRG/giphy.gif'
};

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
  { name: 'Markup HTML5', picture: 'html-logo.png' },
  { name: 'Stylesheet CSS3', picture: 'css-logo.png' },
  { name: 'Vanilla Javascript', picture: 'javascript-logo.png' },
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











