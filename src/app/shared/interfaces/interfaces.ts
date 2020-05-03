interface Content {
  _id?: string;
  title?: string;
  category?: string;
  cover?: string;
  tags?: string[];
  badges?: string[];
  likes?: number;
  stars?: number;
  links?: Link[];
  index?: Index[];
}

interface ServerResponse {
  ok: boolean;
  message?: string;
  err?: any;
}

interface Translation {
  translate: string;
}

export interface Article extends Content {
  message?: string;
  author?: string;
  created?: string;
  published?: string;
  slug?: string;
  level?: string;
  views?: number;
  summary?: string;
  status?: string;
  user?: string;
}

export interface Category extends Content {
  message?: string;
  name?: string;
  info?: CategoryInfo;
  icon?: string;
  faq?: FAQ[];
  updated?: string;
}

export interface ArticleResponse extends ServerResponse {
  article?: Article;
  articles?: Article[];
  page?: number;
}

export interface CategoryResponse extends ServerResponse {
  category?: Category;
}

export interface UserResponse extends ServerResponse {
  user: User;
  users?: User[];
  token?: string;
}

export interface CountResponse extends ServerResponse {
  count?: number;
}

export interface CategoryCountResponse extends ServerResponse {
  count?: object;
}

// tslint:disable-next-line:no-empty-interface
export interface SWResponse extends ServerResponse {}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  account: string;
  profile?: UserProfile;
}

interface UserProfile {
  avatar?: string;
  rol?: string;
  bio?: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  portfolio?: string;
  language?: string;
}

export interface Interaction {
  content: string;
  user: string;
  type: string;
  value: number;
}

export interface InteractionResponse extends ServerResponse {
  interaction: Interaction[];
}

export interface Role extends Translation {
  name: string;
}

export interface DialogData {
  register?: boolean;
  author?: string;
  type?: string;
  cause?: string;
}

export interface SheetData {
  message?: string;
}

export interface SearchRequest {
  value: string;
  category?: string;
  tag?: string;
  year?: string;
  level?: string[];
  badges?: string[];
  stars?: number[];
  type?: string[];
  sort?: number;
}

export interface SearchResponse extends ServerResponse {
  articles?: Article[];
}

export interface List {
  name: string;
  icon?: string;
  link?: string;
  category?: string;
  class?: string;
}

export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  message: string;
}

export interface DownloadButton {
  platform: string;
  class: string;
  icon: string;
  link: string;
}

export interface FooterList {
  title: string;
  list: FooterLink[];
}

interface FooterLink extends Translation {
  name: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CategoryInfo {
  creator?: string;
  where?: string;
  site?: string;
  age?: string;
}

export interface Index {
  title: string;
  subtitle: string;
  id: string;
}

export interface Config {
  name: string;
  selector: string;
}

export interface Link {
  name: string;
  url: string;
}

export class StarList {
  number: number;
  active: boolean;

  constructor(num: number, active: boolean) {
    this.number = num;
    this.active = active;
  }
}

export interface TimeLine {
  year: number;
  message: string;
  side: string;
  fade: string;
}

export interface MostActive {
  name: string;
  count: number;
}

export interface MostActiveResponse extends ServerResponse {
  users: MostActive[];
}

export class CustomError {
  name: string;
  message: string;
  status?: number;
  text: string;
  url?: string;
  author?: string;
  date?: string;
  platform?: string;

  constructor(name: string,
              message: string = 'Error',
              text: string = 'Error',
              author: string,
              status: number = null,
              url: string = '',
              platform: string = '') {
    this.name = name;
    this.message = message;
    this.status = status;
    this.text = text;
    this.url = url;
    this.author = author;
    this.platform = platform;
  }
}

export interface NotificationPayload {
  title?: string;
  body: string;
  icon?: string;
  vibrate?: number[];
  requireInteraction?: boolean;
  data?: NotificationData;
  actions: NotificationAction[];
  user?: string;
  broadcast?: boolean;
}

interface NotificationData {
  url?: string;
  data?: any;
}

interface NotificationAction {
  action: string;
  title: string;
}
