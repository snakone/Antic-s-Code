import { List, Index } from '../interfaces/interfaces';

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
  'Antic\'s',
  'Deno'
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
  },
  {
    name: 'Server Typescript',
    icon: 'deno-logo.png',
    category: 'Deno',
    class: 'even.jpg'
  }
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

export const CATEGORY_INDEX: Index[] = [
  {
    title: 'category.index.intro.title',
    subtitle: 'category.index.intro.subtitle',
    id: 'introducción'
  },
  {
    title: 'category.index.concepts.title',
    subtitle: 'category.index.concepts.subtitle',
    id: 'conceptos'
  },
  {
    title: 'category.index.examples.title',
    subtitle: 'category.index.examples.subtitle',
    id: 'ejemplos'
  },
  {
    title: 'category.index.question.title',
    subtitle: 'category.index.question.subtitle',
    id: 'cat-faq'
  },
];
