import {
  List,
  Testimonial,
  FooterList,
  FAQ,
  ToC,
  Config,
  Role,
  Tag,
  StarList
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
  { name: 'about.me', link: '/articles', icon: 'directions_run' },
  { name: 'searcher', link: '/search', icon: 'search' }
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
  'Consola',
  'Desarrollo',
  'Diseño',
  'Material',
  'Frontend',
  'Backend',
  'Typescript',
  'Database',
  'Ionic',
  'Config'
];

export const TAGS_ICON: Tag[] = [
  { name: 'Consola', icon: 'computer' },
  { name: 'Desarrollo', icon: 'build' },
  { name: 'Diseño', icon: 'color_lens' },
  { name: 'Material', icon: 'view_compact' },
  { name: 'Frontend', icon: 'personal_video' },
  { name: 'Backend', icon: 'cast_connected' },
  { name: 'Typescript', icon: 'language' },
  { name: 'Database', icon: 'cloud_queue' },
  { name: 'Ionic', icon: 'phone_android' },
  { name: 'Config', icon: 'toc' },
];

export const POPULAR_CATEGORIES: List[] = [
  {
    name: 'code',
    icon: 'code',
    class: 'icon-pink'
  },
  {
    name: 'articles',
    icon: 'receipt',
    class: 'icon-orange'
  },
  {
    name: 'tutorials',
    icon: 'nature_people',
    class: 'icon-green'
  },
  {
    name: 'examples',
    icon: 'wallpaper',
    class: 'icon-red'
  },
];

export const MAIN_CATEGORIES: List[] = [
  {
    name: 'Markup HTML5',
    icon: 'html-logo.png',
    category: 'HTML',
    class: 'odd.jpg'
  },
  {
    name: 'Stylesheet CSS3',
    icon: 'css-logo.png',
    category: 'CSS',
    class: 'even.jpg'
  },
  {
    name: 'Vanilla Javascript',
    icon: 'javascript-logo.png',
    category: 'Javascript',
    class: 'odd.jpg'
  },
  {
    name: 'Angular Framework',
    icon: 'angular-logo.png',
    category: 'Angular',
    class: 'even.jpg'
  },
  {
    name: 'Server Javascript',
    icon: 'node-logo.png',
    category: 'Nodejs',
    class: 'odd.jpg'
  },
  {
    name: 'Mongo Database',
    icon: 'mongo-logo.png',
    category: 'MongoDB',
    class: 'even.jpg'
  }
];

export const LANGUAGES: Config[] = [
  { name: 'Spanish', selector: 'es' },
  { name: 'English', selector: 'en' }
];

export const LEVELS: string[] = [
  'Básico',
  'Medio',
  'Avanzado'
];

export const BADGES: string[] = [
  'Nuevo',
  'Destacado',
  'Popular'
];

export const SEARCH_TYPES: string[] = [
  'likes',
  'stars',
  'views'
];

export const STAR_LIST: StarList[] = [
  { number: 5, active: false },
  { number: 4, active: false },
  { number: 3, active: false },
  { number: 2, active: false },
  { number: 1, active: false },
  { number: 0, active: false },
];

export const THEMES: Config[] = [
  { name: 'Default', selector: 'default' },
  { name: 'Deep Blue', selector: 'deepblue' },
  { name: 'Deep Green', selector: 'deepgreen' },
  { name: 'Dark Red', selector: 'darkred' },
  { name: 'Sky Blue', selector: 'skyblue' },
  { name: 'Super Orange', selector: 'superorange' }
];

export const SOCIAL_PROFILE: Config[] = [
  { name: 'Twitter', selector: 'twitter' },
  { name: 'Github', selector: 'github' },
  { name: 'Portfolio', selector: 'portfolio' }
];

export const ROLES: Role[] = [
  { name: 'Web Developer', translate: 'web.dev' },
  { name: 'Frontend Developer', translate: 'front.dev' },
  { name: 'Backend Developer', translate: 'back.dev' },
  { name: 'Full-Stack Developer', translate: 'full.dev' },
  { name: 'Designer', translate: 'design.dev' },
  { name: 'Web Designer', translate: 'design.web' }
];

export const PRO_LANGS: string[] = [
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'Typescript',
  'Swift',
  'PHP',
  'Dart'
];

export const PAGE_BG = {
  code: 'assets/img/page_bg/code.mp4',
  categories: 'assets/img/page_bg/categories.mp4',
  articles: 'assets/img/page_bg/articles.mp4',
  article: 'assets/img/page_bg/article.mp4',
  profile: 'assets/img/page_bg/profile.mp4',
  admin: 'assets/img/page_bg/admin.mp4',
  public: 'assets/img/page_bg/public.mp4',
  search: 'assets/img/page_bg/search.mp4'
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

export const FOOTER_LIST: FooterList[] = [
  {
    title: 'info',
    list: ['about.me', 'contact', 'support', 'politics']
  },
  {
    title: 'useful.links',
    list: ['register', 'how.it.works', 'advantages', 'collaborate']
  },
  {
    title: 'connect.me',
    list: ['help', 'Twitter', 'Facebook', 'Youtube']
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











