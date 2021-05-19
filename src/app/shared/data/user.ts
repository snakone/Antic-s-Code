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
  { name: 'Web Developer', translate: 'WEB.DEV' },
  { name: 'Frontend Developer', translate: 'FRONT.DEV' },
  { name: 'Backend Developer', translate: 'BACK.DEV' },
  { name: 'Full-Stack Developer', translate: 'FULL.DEV' },
  { name: 'Designer', translate: 'DESIGN.DEV' },
  { name: 'Web Designer', translate: 'DESIGN.WEB' },
  { name: 'Mobile Developer', translate: 'MOBILE.DEV' },
];

export const TOTAL_USER_DATA: TotalUserData[] = [
  { name: 'likes', icon: 'favorite' },
  { name: 'views', icon: 'visibility' }
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

export const USER_ROLS: UserRol[] = [
  { rol: 'Admin', icon: 'mage.png', name: 'ADMIN' },
  { rol: 'User', icon: 'user.png', name: 'USERS' },
  { rol: 'ALL', icon: 'all.png', name: 'ALL' }
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
  { text: 'SHOW', show: true },
  { text: 'HIDE', show: false }
];

export const VISUAL_OPTS: ShowHide[] = [
  { text: 'LIST', show: false },
  { text: 'GRID', show: true }
];


