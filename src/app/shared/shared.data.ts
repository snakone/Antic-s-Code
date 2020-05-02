import {
  List,
  FooterList,
  Config,
  Role,
  StarList,
  TimeLine,
  Index,
  CarouselSlide,
  DownloadButton,
  NotificationPayload
} from './interfaces/interfaces';

import { AosOptions } from 'aos';

export const MENU: List[] = [
  { name: 'home', link: '/home' },
  { name: 'categories', link: '/categories' },
  { name: 'articles', link: '/articles' },
  { name: 'users', link: '/users' }
];

export const HOME_MENU: List[] = [
  { name: 'advantages', link: '/advantages', icon: 'autorenew' },
  { name: 'collaborate', link: '/collaborate', icon: 'present_to_all' },
  { name: 'support', link: '/support', icon: 'help_outline' },
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
  'Android',
  'Design',
  'GO',
  'Python',
  'Git',
  'Antic\'s'
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
  'Config',
  'Git',
  'Antic\'s Code'
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
    name: 'Web Design',
    icon: 'design-logo.png',
    category: 'Design',
    class: 'even.jpg'
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
  },
  {
    name: 'GO Lang',
    icon: 'go-logo.png',
    category: 'GO',
    class: 'even.jpg'
  },
  {
    name: 'Python',
    icon: 'python-logo.png',
    category: 'Python',
    class: 'odd.jpg'
  },
  {
    name: 'Git System',
    icon: 'git-logo.png',
    category: 'Git',
    class: 'even.jpg'
  },
  {
    name: 'Antic\'s Code',
    icon: 'antics-logo.png',
    category: 'Antic\'s',
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
  'Javascript',
  'Python',
  'Java',
  'C++',
  'Typescript',
  'Swift',
  'PHP',
  'Dart',
  'GO'
];

export const PAGE_BG = {
  about: 'assets/img/page_bg/about.mp4',
  advantages: 'assets/img/page_bg/advantages.mp4',
  article: 'assets/img/page_bg/article.mp4',
  articles: 'assets/img/page_bg/articles.mp4',
  categories: 'assets/img/page_bg/categories.mp4',
  collaborate: 'assets/img/page_bg/collaborate.mp4',
  contact: 'assets/img/page_bg/contact.mp4',
  create: 'assets/img/page_bg/create.mp4',
  help: 'assets/img/page_bg/help.mp4',
  politics: 'assets/img/page_bg/politics.mp4',
  profile: 'assets/img/page_bg/profile.mp4',
  public: 'assets/img/page_bg/public.mp4',
  search: 'assets/img/page_bg/search.mp4',
  support: 'assets/img/page_bg/support.mp4',
  users: 'assets/img/page_bg/users.mp4',
  works: 'assets/img/page_bg/works.mp4'
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

export const TESTIMONIALS: CarouselSlide[] = [
  {
    image: 'testimonial1.jpg',
    title: 'Eleazar Carreón',
    subtitle: 'Tamaulipas, México',
    message: `Un lugar fantástico, para llevar las buenas prácticas.
              Antic's Code me ayuda a estar actualizado en la industria de la tecnología.`
  },
  {
    image: 'testimonial2.jpg',
    title: 'Daniel Solarte',
    subtitle: 'Medellín, Colombia',
    message: `Usar Antic's Code es realmente fácil, he encontrado todos los artículos
              necesarios sin perderme. Es el mejor lugar para escribir tu Artículo.`
  },
  {
    image: 'testimonial3.jpg',
    title: 'Paolo Torregroza',
    subtitle: 'Guatavita, Colombia',
    message: `Conozco pocos lugares en donde pueda compartir información con facilidad,
              y Antic's Code es uno de los mejores.`
  }
];

export const CREATE_SLIDES: CarouselSlide[] = [
  {
    image: 'start.jpg',
    title: 'Escribir un Artículo',
    subtitle: 'Conceptos básicos para una buena escritura.',
    message: `Uno de los pocos requisitos para escribir en Antic\'s Code es
              saber Markdown, todo lo demás depende de ti. Los Artículos serán
              visibles tanto aquí como en Antic's Code Desktop. ¿A qué esperas
              para plasmar tu conocimiento?`
  },
  {
    image: 'form.jpg',
    title: 'Creación del Artículo',
    subtitle: 'Un buen Artículo contiene gran variedad de información.',
    message: `Tómate tu tiempo para rellenar los datos del Artículo.
              Es importante saber elegir bien. El título servirá para crear
              un enlace único con el que podrás compartir el contenido.`
  },
  {
    image: 'form-valid.jpg',
    title: 'Rellena los datos',
    subtitle: 'Nos tomamos en enserio mantener un mismo formato para todos los Artículos.',
    message: `Rellena los datos, contra más información proporciones, más rico en contenido será.
              Escribir una buena introducción es esencial para atraer a los lectores,
              tenlo en cuenta.`
  },
  {
    image: 'markdown.jpg',
    title: 'Manos a la obra',
    subtitle: 'Utiliza Markdown para escribir un Artículo de calidad.',
    message: `Dispondrás de un panel donde escribir Makrdown y una previsualización del Artículo.
              No te preocupes si necesitas una pausa. Si sales de la aplicación, podrás
              cargar el Artículo por donde lo dejaste.`
  },
  {
    image: 'info.jpg',
    title: 'Información adicional',
    subtitle: 'Puedes añadir enlaces referentes al Artículo.',
    message: `Añade enlaces externos para incrementar el valor del Artículo.
              Dejar al lector en un punto muerto es algo importante a
              evitar ya que induce al abandono de la aplicación.`
  },
    {
    image: 'article.jpg',
    title: 'Tu contenido',
    subtitle: 'Crea y comparte contenido con otras personas interesadas en programación.',
    message: `Cuando el equipo de moderación apruebe tu Artículo, aparecerá listado junto
              con los demás. Desde ese momento cualquier usuario podrá leer y
              aprender de tu contenido.`
  }
];

export const FOOTER_LIST: FooterList[] = [
  {
    title: 'info',
    list: [
      {
        name: 'about-me',
        translate: 'about.me'
      },
      {
        name: 'contact',
        translate: 'contact'
      },
      {
        name: 'support',
        translate: 'support'
      },
      {
        name: 'politics',
        translate: 'politics'
      }
    ]
  },
  {
    title: 'useful.links',
    list: [
      {
        name: 'register',
        translate: 'register'
      },
      {
        name: 'how-works',
        translate: 'how.it.works'
      },
      {
        name: 'advantages',
        translate: 'advantages'
      },
      {
        name: 'collaborate',
        translate: 'collaborate'
      }
    ]
  },
  {
    title: 'connect.me',
    list: [
      {
        name: 'help',
        translate: 'help'
      },
      {
        name: 'Twitter',
        translate: 'Twitter'
      },
      {
        name: 'Facebook',
        translate: 'Facebook'
      },
      {
        name: 'Youtube',
        translate: 'Youtube'
      }
    ]
  }
];

export const CATEGORY_INDEX: Index[] = [
  {
    title: 'Introducción',
    subtitle: 'Una breve introducción',
    id: 'introducción'
  },
  {
    title: 'Conceptos',
    subtitle: 'Conceptos básicos',
    id: 'conceptos'
  },
  {
    title: 'Ejemplos',
    subtitle: 'Aprende con ejemplos',
    id: 'ejemplos'
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
    message: `Dejé de lado el camino para aventurarme en la <strong>Formación Profesional</strong>.
              Me decidípor la rama tecnologíca empezando por lo más básico, la electricidad y la
              electrónica.`,
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

export const MY_SKILLS_LOGO: string[] = [
  'devicon-html5-plain-wordmark',
  'devicon-css3-plain-wordmark',
  'devicon-javascript-plain',
  'devicon-php-plain',
  'devicon-mysql-plain-wordmark',
  'devicon-wordpress-plain-wordmark',
  'devicon-nodejs-plain-wordmark',
  'devicon-angularjs-plain',
  'devicon-mongodb-plain-wordmark',
  'devicon-express-original',
  'devicon-typescript-plain',
  'devicon-atom-original',
  'devicon-bootstrap-plain-wordmark',
  'devicon-heroku-original-wordmark',
  'devicon-jquery-plain-wordmark'
];

export const MY_SKILLS: string[] = [
  'Cooperación',
  'Orientación al cliente',
  'Networking',
  'Comunicación',
  'Empatía',
  'Planificación',
  'Fácil aprendizaje',
  'Conocimiento',
  'Flexibilidad',
  'Creatividad',
  'Entusiasmo',
  'Pensamiento conceptual',
  'Orden y Calidad',
  'Buena presencia',
  'Espíritu superación',
  'Compromiso',
];

export const CONDITIONS: string[] = [
  'term.one',
  'term.two',
  'term.three',
  'term.four',
  'term.five',
]

const DOWNLOAD_URI: any = {
  windows: 'https://mega.nz/file/stQkES6B#E1Jv2SXXVIrjqJ4yyblb1YCWyWbWUyvD4FN2UrD_EBQ',
  mac: 'https://mega.nz/file/V8ZkAQCC#uhcc9C0qSu6SCHU-VQ-TJSCdeBG7DAedvxNqpSvj3jY',
  linux: 'https://mega.nz/file/clRykKDI#kbUFZKg-wQJljCbUtx9tvsGmRLhpyFwe39QGQW8LzYc'
};

export const DOWNLOAD_BUTTONS: DownloadButton[] = [
  {
    platform: 'Windows',
    class: 'windows',
    icon: 'windows.png',
    link: DOWNLOAD_URI.windows
   },
  {
    platform: 'Mac OX',
    class: 'mac',
    icon: 'mac.png',
    link: DOWNLOAD_URI.mac
  },
  {
    platform: 'Linux',
    class: 'linux',
    icon: 'linux.png',
    link: DOWNLOAD_URI.linux
  }
];

export const WELCOME_PUSH: NotificationPayload = {
  body: 'Bienvenido/a',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: 'Gracias por visitarnos' }
  ],
  broadcast: false
};

export const NEW_USER_PUSH: NotificationPayload = {
  body: 'Nuevo Usuario Registrado',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: 'Aceptar' }
  ],
  broadcast: true
};

export const LIKE_PUSH: NotificationPayload = {
  body: 'Nuevo Like en tu Artículo',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: '¡Genial!' }
  ],
  data: {},
  broadcast: false
}

export const STAR_PUSH: NotificationPayload = {
  body: 'Nueva Puntuación en tu Artículo',
  requireInteraction: false,
  actions: [
    { action: 'explore', title: '¡Genial!' }
  ],
  data: {},
  broadcast: false
}















