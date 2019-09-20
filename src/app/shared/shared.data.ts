import {
  List,
  Testimonial,
  FooterList,
  FAQ,
  ToC,
  Config
} from './interfaces/interfaces';

export const MENU: List[] = [
  { name: 'home', link: '/home' },
  { name: 'code', link: '/code' },
  { name: 'categories', link: '/categories' },
  { name: 'articles', link: '/articles' }
];

export const HOME_MENU: List[] = [
  { name: 'advantages', link: '/home', icon: 'autorenew' },
  { name: 'collaborate', link: '/code', icon: 'present_to_all' },
  { name: 'support', link: '/categories', icon: 'help_outline' },
  { name: 'about.me', link: '/articles', icon: 'directions_run' }
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
  'Desarrollo',
  'Typescript',
  'Frontend',
  'Backend',
  'Diseño',
  'SCSS',
  'Ionic',
  'Database'
];

export const CODE_TAGS: string[] = [
  'Consola',
  'Javascript',
  'HTML',
  'Nodejs',
  'Diseño',
  'CSS',
  'SCSS',
  'Typescript',
  'Angular',
  'Material',
  'Ionic',
  'Database',
  'Config',
  'Todas'
];

export const POPULAR_CATEGORIES: List[] = [
  {
    name: 'Cógido',
    icon: 'code',
    class: 'icon-pink'
  },
  {
    name: 'Artículos',
    icon: 'receipt',
    class: 'icon-orange'
  },
  {
    name: 'Tutoriales',
    icon: 'nature_people',
    class: 'icon-green'
  },
  {
    name: 'Ejemplos',
    icon: 'wallpaper',
    class: 'icon-red'
  },
];

export const MAIN_CATEGORIES: List[] = [
  {
    name: 'Markup HTML5',
    icon: 'html-logo.png',
    category: 'HTML',
    class: 'odd.png'
  },
  {
    name: 'Stylesheet CSS3',
    icon: 'css-logo.png',
    category: 'CSS',
    class: 'even.png'
  },
  {
    name: 'Vanilla Javascript',
    icon: 'javascript-logo.png',
    category: 'Javascript',
    class: 'odd.png'
  },
  {
    name: 'Angular Framework',
    icon: 'angular-logo.png',
    category: 'Angular',
    class: 'even.png'
  },
  {
    name: 'Server Javascript',
    icon: 'node-logo.png',
    category: 'Nodejs',
    class: 'odd.png'
  },
  {
    name: 'Mongo Database',
    icon: 'mongo-logo.png',
    category: 'MongoDB',
    class: 'even.png'
  }
];

export const LANGUAGES: Config[] = [
  { name: 'Spanish', selector: 'es' },
  { name: 'English', selector: 'en' }
];

export const THEMES: Config[] = [
  { name: 'Default', selector: 'default' },
  { name: 'Deep Blue', selector: 'deepblue' },
  { name: 'Deep Green', selector: 'deepgreen' },
  { name: 'Dark Red', selector: 'darkred' },
  { name: 'Sky Blue', selector: 'skyblue' }
];

export const PAGE_BG = {
  code: 'https://media0.giphy.com/media/l3q2XB76CaWPggiNW/giphy.gif',
  categories: 'https://media2.giphy.com/media/hLzncGRSaC5Nu/giphy.gif',
  articles: 'https://media0.giphy.com/media/xUA7bgk0V4eUyNVaAo/giphy.gif',
  article: 'https://media2.giphy.com/media/b93B4aJQQakRG/giphy.gif',
  profile: 'https://media3.giphy.com/media/h0Ti6XKcFKBby/giphy.gif'
};

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
  { name: 'Markup HTML5', icon: 'html-logo.png', link: 'HTML' },
  { name: 'Stylesheet CSS3', icon: 'css-logo.png', link: 'CSS' },
  { name: 'Vanilla Javascript', icon: 'javascript-logo.png', link: 'Javascript' },
  { name: 'Angular Framework', icon: 'angular-logo.png', link: 'Angular' },
  { name: 'Server Javascript', icon: 'node-logo.png', link: 'Nodejs' },
  { name: 'Mongo Database', icon: 'mongo-logo.png', link: 'MongoDB' }
];

export const FOOTER_LIST: FooterList[] = [
  {
    title: 'Información',
    list: ['Sobre mí', 'Contacto', 'Soporte', 'Políticas']
  },
  {
    title: 'Enlaces Útiles',
    list: ['Registrarse', '¿Cómo funciona?', 'Ventajas', 'Colabora']
  },
  {
    title: 'Conecta Conmigo',
    list: ['Ayuda', 'Twitter', 'Facebook', 'Youtube']
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

export const CATEGORY_TOC: ToC[] = [
  {
    index: 'Introducción',
    description: 'A brief introduction',
    anchor: 'cat-intro'
  },
  {
    index: 'Conceptos',
    description: 'Technology concepts',
    anchor: 'cat-concept'
  },
  {
    index: 'Ejemplos',
    description: 'Learning bit a bit',
    anchor: 'cat-examples'
  },
  {
    index: 'FAQ\'s',
    description: 'Frequently asked questions',
    anchor: 'cat-faq'
  },
];











