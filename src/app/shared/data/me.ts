import { TimeLine, Skill, WorkCompany } from '../interfaces/interfaces';

export const TIME_LINE: TimeLine[] = [
  {
    year: 1987,
    message: 'me.time.born',
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 1992,
    message: 'me.time.school',
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2000,
    message: 'me.time.collage',
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2003,
    message: 'me.time.first',
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2005,
    message: 'me.time.study',
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2007,
    message: 'me.time.more',
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2014,
    message: 'me.time.cim',
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2018,
    message: 'me.time.ita',
    side: 'right',
    fade: 'fade-left'
  },
  {
    year: 2019,
    message: 'me.time.job',
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2020,
    message: 'me.time.keep',
    side: 'right',
    fade: 'fade-left'
  }
];



export const MY_HARD_SKILLS: Skill[] = [
 {
   name: 'HTML',
   area: 'me.skills.hard.html.area',
   message: 'me.skills.hard.html.message',
   year: 2004,
   icon: 'html.png'
 },
 {
  name: 'CSS',
  area: 'me.skills.hard.css.area',
  message: 'me.skills.hard.css.message',
  year: 2006,
  icon: 'css.png'
 },
 {
  name: 'Javascript',
  area: 'me.skills.hard.js.area',
  message: 'me.skills.hard.js.message',
  year: 2014,
  icon: 'javascript.png'
 },
 {
  name: 'PHP',
  area: 'me.skills.hard.php.area',
  message: 'me.skills.hard.php.message',
  year: 2012,
  icon: 'php.png'
 },
 {
  name: 'MySQL',
  area: 'me.skills.hard.sql.area',
  message: 'me.skills.hard.sql.message',
  year: 2012,
  icon: 'mysql.png'
 },
 {
  name: 'Wordpress',
  area: 'me.skills.hard.press.area',
  message: 'me.skills.hard.press.message',
  year: 2010,
  icon: 'wordpress.png'
 },
 {
  name: 'Nodejs',
  area: 'me.skills.hard.node.area',
  message: 'me.skills.hard.node.message',
  year: 2017,
  icon: 'node.png'
 },
 {
  name: 'Angular',
  area: 'me.skills.hard.angular.area',
  message: 'me.skills.hard.angular.message',
  year: 2018,
  icon: 'angular.png'
 },
 {
  name: 'MongoDB',
  area: 'me.skills.hard.mongo.area',
  message: 'me.skills.hard.mongo.message',
  year: 2018,
  icon: 'mongo.png'
 },
 {
  name: 'Node Express',
  area: 'me.skills.hard.express.area',
  message: 'me.skills.hard.express.message',
  year: 2018,
  icon: 'express.png'
 },
 {
  name: 'Typescript',
  area: 'me.skills.hard.ts.area',
  message: 'me.skills.hard.ts.message',
  year: 2018,
  icon: 'typescript.svg'
 },
 {
  name: 'VSCode',
  area: 'me.skills.hard.vsc.area',
  message: 'me.skills.hard.vsc.message',
  year: 2018,
  icon: 'vscode.png'
 },
 {
  name: 'Bootstrap',
  area: 'me.skills.hard.bootstrap.area',
  message: 'me.skills.hard.bootstrap.message',
  year: 2014,
  icon: 'boostrap.png'
 },
 {
  name: 'Heroku',
  area: 'me.skills.hard.heroku.area',
  message: 'me.skills.hard.heroku.message',
  year: 2019,
  icon: 'heroku.png'
 },
 {
  name: 'JQuery',
  area: 'me.skills.hard.jquery.area',
  message: 'me.skills.hard.jquery.message',
  year: 2009,
  icon: 'jquery.png'
 },
 {
  name: 'Git',
  area: 'me.skills.hard.git.area',
  message: 'me.skills.hard.git.message',
  year: 2018,
  icon: 'git.png'
 },
 {
  name: 'Ionic',
  area: 'me.skills.hard.ionic.area',
  message: 'me.skills.hard.ionic.message',
  year: 2019,
  icon: 'ionic.png'
 },
 {
  name: 'Rxjs',
  area: 'me.skills.hard.rxjs.area',
  message: 'me.skills.hard.rxjs.message',
  year: 2019,
  icon: 'rxjs.png'
 }
];

export const MY_SOFT_SKILLS: string[] = [
  'me.skills.soft.cooperation',
  'me.skills.soft.client',
  'me.skills.soft.network',
  'me.skills.soft.communication',
  'me.skills.soft.empathy',
  'me.skills.soft.plan',
  'me.skills.soft.easy',
  'me.skills.soft.knowledge',
  'me.skills.soft.flex',
  'me.skills.soft.creative',
  'me.skills.soft.hope',
  'me.skills.soft.concept',
  'me.skills.soft.order',
  'me.skills.soft.look',
  'me.skills.soft.spirit',
  'me.skills.soft.compromise'
];

export const MY_COMPANIES: WorkCompany[] = [
  {
    name: 'Slash Mobility',
    type: 'me.work.slash.type',
    rank: 'Software Developer',
    tasks: [
      'me.work.slash.task.one',
      'me.work.slash.task.two'
    ],
    clients: [
      'Catalana Occidente',
      'Bank Sabadell',
      'Accenture'
    ],
    link: 'https://www.slashmobility.com',
    now: false
  },
  {
    name: 'AT Sistemas',
    type: 'me.work.ats.type',
    rank: 'Software Developer',
    tasks: [
      'me.work.ats.task.one',
      'me.work.ats.task.two'
    ],
    clients: [
      'Generali'
    ],
    link: 'https://www.atsistemas.com/es',
    now: true
  }
];
