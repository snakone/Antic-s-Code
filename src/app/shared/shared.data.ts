import {
  List,
  Testimonial,
  FooterList,
  Config,
  Role,
  Tag,
  StarList,
  TimeLine,
  Index
} from './interfaces/interfaces';
import { AosOptions } from 'aos';

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
  { name: 'about.me', link: '/about-me', icon: 'directions_run' },
  { name: 'searcher', link: '/search', icon: 'search' }
];

export const CATEGORIES: string[] = [
  'HTML',
  'CSS',
  'Javascript',
  'Angular',
  'Nodejs',
  'MongoDB',
  'Android'
];

export const TAGS: string[] = [
  'Consola',
  'Desarrollo',
  'Diseño',
  'Material',
  'Frontend',
  'Backend',
  'Typescript',
  'Mobile',
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
  { name: 'Mobile', icon: 'phone_android' },
  { name: 'Javascript', icon: 'code' },
  { name: 'Typescript', icon: 'language' },
  { name: 'Database', icon: 'cloud_queue' },
  { name: 'Ionic', icon: 'phone_android' },
  { name: 'Config', icon: 'toc' }
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
  },
  {
    name: 'Native Android',
    icon: 'android-logo.png',
    category: 'Android',
    class: 'odd.jpg'
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
  { name: 'Web Designer', translate: 'design.web' },
  { name: 'Mobile Developer', translate: 'mobile.dev' },

];

export const PROFILE_LANGS: string[] = [
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
  search: 'assets/img/page_bg/search.mp4',
  about: 'assets/img/page_bg/about.mp4',
  create: 'assets/img/page_bg/create.mp4'
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

export const CATEGORY_INDEX: Index[] = [
  {
    title: 'Introducción',
    subtitle: 'Una breve introducción',
    id: 'cat-intro'
  },
  {
    title: 'Conceptos',
    subtitle: 'Conceptos básicos',
    id: 'cat-concepts'
  },
  {
    title: 'Ejemplos',
    subtitle: 'Aprende con ejemplos',
    id: 'cat-examples'
  },
  {
    title: 'Preguntas y Respuestas',
    subtitle: 'Preguntas frecuentes',
    id: 'cat-faq'
  },
];

// AOS Settings
export const AOS_SETTINGS: AosOptions = {
  disable: 'mobile',
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 175,
  delay: 200,
  duration: 700,
  easing: 'ease-in-out',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
};

// TIME LINE
export const TIME_LINE: TimeLine[] = [
  {
    year: 1987,
    message: `Nací en un lugar privilegiado, <strong>Barcelona</strong>. En el último siglo,
              esta ciudad ha sido una de las grandes referencias tecnológicas a nivel mundial
              sobretodo gracias al conocido 'Mobile World Congress'`,
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 1992,
    message: `En el colegio fuí de los primeros en aprender de memoría las tablas de multiplicar,
              además el claustro de profesores pensó en adelantarme un curso entero por los resultados
              que daba. Cosa que al final no pasó.`,
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2000,
    message: `Mi andada por el <strong>instituto</strong> fué bastante normal. Cabe destacar
              que en uno de esos años, gané un concurso al mejor relato en el día de Sant Jordi.<br>
              Hablaba sobre el ser humano y el pensamiento abstracto.`,
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2003,
    message: `Creé mi primera página web en las clases de <strong>informática</strong> del instituto y
              hasta día de hoy no he dejado de aprender y crear cosas nuevas.`,
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2005,
    message: `Dejé de lado el camino para aventurarme en la <strong>Formación Profesional</strong>. Me decidí
              por la rama tecnologíca empezando por lo más básico, la electricidad y la electrónica.`,
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2007,
    message: `Seguí el rumbo que había tomado y continué con mis estudios en tecnología pero
              esta vez con estudios superiores en <strong>informática y telecomunicaciones</strong>.`,
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2014,
    message: `En la fundación <strong>CIM</strong>
              parte de la Universidad Politécnica de Cataluña aprendí a conectar las páginas web que tanto me gustaban
              a <strong>bases de datos</strong>, aumentando el grado de complejidad de éstas.`,
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2018,
    message: `La historia se repite, parece que la tecnología es más rápida que yo. Dejé mi trabajo el cual
              no tenía nada que ver con este asunto para volver a intentar estudiar programación web,
              mi verdadera <strong>pasión</strong>, esta vez en una
              academia llamada <strong>IT Academy Barcelona</strong>.`,
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2019,
    message: `Lo último que puedo decir es que gracias a <strong>IT Academy Barcelona</strong> por fín
              encontré un trabajo en una empresa desarrolladora de software.<br>
              Desde aquí dar las <strong>gracias</strong> a todas las personas que me ayudaron a
              llegar hasta este momento. Un saludo a todos ellos.`,
    side: 'left',
    fade: 'fade-right'
  }
];













