import {
  Role,
  TotalUserData,
  Config,
  UserRol,
  List,
  ShowHide
} from '../interfaces/interfaces';

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

export const TOTAL_USER_DATA: TotalUserData[] = [
  { name: 'likes', icon: 'favorite' },
  { name: 'views', icon: 'visibility' }
]

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

export const USER_ROLS: UserRol[] = [
  { rol: 'Admin', icon: 'mage.png', name: 'Admin' },
  { rol: 'User', icon: 'user.png', name: 'Users' },
  { rol: 'All', icon: 'all.png', name: 'Todos' }
];

export const MY_SOCIAL: List[] = [
  {
    name: 'Linkedin',
    icon: 'fa fa-linkedin',
    link: 'https://www.linkedin.com/in/sergio-martinez-9b933a13a/'
  },
  {
    name: 'Github',
    icon: 'fa fa-github-square',
    link: 'https://github.com/snakone'
  },
  {
    name: 'Twitter',
    icon: 'fa fa-twitter',
    link: '#'
  }
];

export const SHOW_HIDE: ShowHide[] = [
  { text: 'show', show: true },
  { text: 'hide', show: false }
];
