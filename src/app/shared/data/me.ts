import { TimeLine, Skill, WorkCompany } from '../interfaces/interfaces';

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
              que en uno de esos años, conseguí el primer puesto en un concurso al mejor relato
              en el día de Sant Jordi.<br> Hablaba sobre el ser humano y el pensamiento abstracto.`,
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
              Me decidí por la rama tecnológica empezando por lo más básico, la electricidad y la
              electrónica.`,
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2007,
    message: `Seguí el rumbo que había tomado y continué mis estudios en tecnología sin embargo
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
    message: `Gracias a <strong>IT Academy Barcelona</strong> por fín
              encontré un trabajo en una empresa desarrolladora de software.<br>
              Desde aquí dar las <strong>gracias</strong> a todas las personas que me ayudaron a
              llegar hasta este momento. Un saludo a todos ellos.`,
    side: 'left',
    fade: 'fade-right'
  },
  {
    year: 2020,
    message: `Sigo trabajando como desarrollador de software, ahora mismo a <strong>distancia</strong>.
              En este tiempo he aprendido más a fondo Angular y también a <strong>trabajar en equipo</strong>
              con otros desarrolladores.<br> Coordinarse con los demás equipos implicados en el desarrollo
              es esencial para llevar un buen ritmo de trabajo.`,
    side: 'right',
    fade: 'fade-left'
  }
];



export const MY_HARD_SKILLS: Skill[] = [
 {
   name: 'HTML',
   area: 'Creación páginas web',
   message: 'Maquetación, estructura, identación, legible, estándares, accesibilidad.',
   year: 2004,
   icon: 'html.png'
 },
 {
  name: 'CSS',
  area: 'Diseño páginas web',
  message: 'Cascada, herencia, box-model, flex-box, grid, layouts, interfaces, SCSS.',
  year: 2006,
  icon: 'css.png'
 },
 {
  name: 'Javascript',
  area: 'Programación',
  message: 'Limpio, Ecmascript, lógica, reactivo, legible, async-wait, operaciones.',
  year: 2014,
  icon: 'javascript.png'
 },
 {
  name: 'PHP',
  area: 'Programación',
  message: 'Conexiones, envío de formularios, obtener, procesar y mostrar datos.',
  year: 2012,
  icon: 'php.png'
 },
 {
  name: 'MySQL',
  area: 'Base de datos relacional',
  message: 'Administración y diseño de base de datos, modelo entidad-relación.',
  year: 2012,
  icon: 'mysql.png'
 },
 {
  name: 'Wordpress',
  area: 'Gestor de contenido',
  message: 'Instalación, administración, edición, diseño, escribir contenido.',
  year: 2010,
  icon: 'wordpress.png'
 },
 {
  name: 'Nodejs',
  area: 'Servidor web con Javascript',
  message: 'Entorno, uso de paquetes de npm, dependencias, actualizaciones, librerías',
  year: 2017,
  icon: 'node.png'
 },
 {
  name: 'Angular',
  area: 'Framework web',
  message: 'Creación de aplicaciones web de todo tipo, modular, legible, reutilizable.',
  year: 2018,
  icon: 'angular.png'
 },
 {
  name: 'MongoDB',
  area: 'Base de datos no relacional',
  message: 'Diseñar y administrar bases de datos no relacionales basadas en documentos JSON.',
  year: 2018,
  icon: 'mongo.png'
 },
 {
  name: 'Node Express',
  area: 'Framework de Node',
  message: 'Creación de servidores, API REST, controladores, middlewares, JWT.',
  year: 2018,
  icon: 'express.png'
 },
 {
  name: 'Typescript',
  area: 'Programación',
  message: 'Clases, interfaces, tipado, legible, autocompletado, evitar errores.',
  year: 2018,
  icon: 'typescript.svg'
 },
 {
  name: 'VSCode',
  area: 'Entorno de trabajo',
  message: 'Extensiones, prettier, emmet, atajos de teclado, terminal integrado.',
  year: 2018,
  icon: 'vscode.png'
 },
 {
  name: 'Boostrap',
  area: 'Diseño Responsive',
  message: 'Grid, responsive, mobile first, clases, flex-box, diseño de interfaces.',
  year: 2014,
  icon: 'boostrap.png'
 },
 {
  name: 'Heroku',
  area: 'Alojamiento servidores',
  message: 'Despliegue de aplicaciones a la nube, administración, seguimiento.',
  year: 2019,
  icon: 'heroku.png'
 },
 {
  name: 'JQuery',
  area: 'Programación',
  message: 'Entender y ejecutar scripts de todo tipo para ciertas funcionalidades.',
  year: 2009,
  icon: 'jquery.png'
 },
 {
  name: 'Git',
  area: 'Trabajo en equipo',
  message: 'Entorno corporativo para trabajar en diversos entornos de desarrollo.',
  year: 2018,
  icon: 'git.png'
 },
 {
  name: 'Ionic',
  area: 'Híbrido',
  message: 'Creación, ampliación y corrección de aplicaciones para teléfonos móbiles.',
  year: 2019,
  icon: 'ionic.png'
 },
 {
  name: 'Rxjs',
  area: 'Programación reactiva',
  message: 'Observables, flujo de datos, pipes, operadores, manejo del flujo',
  year: 2019,
  icon: 'rxjs.png'
 }
];

export const MY_SOFT_SKILLS: string[] = [
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

export const MY_COMPANIES: WorkCompany[] = [
  {
    name: 'Slash Mobility',
    type: 'Consultora de Software',
    rank: 'Software Developer',
    tasks: [
      'Dar soluciones tecnológicas a otras compañias usando software.',
      'Desarrollo ágil, rápido y eficaz. Tiempo de entrega medio, 3 meses.'
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
    type: 'Consultora de Software',
    rank: 'Software Developer',
    tasks: [
      'Desarrollar soluciones específicas para diversos tipos de aplicaciones.',
      'Coordinar los diferentes equipos que se relacionan con el desarrollo "Frontend".'
    ],
    clients: [
      'Generali'
    ],
    link: 'https://www.atsistemas.com/es',
    now: true
  }
];
