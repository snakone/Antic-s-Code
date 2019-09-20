interface Content {
  _id?: string;
  title?: string;
  category?: string;
  message?: string;
  cover?: string;
  code?: Code[];
  tags?: string[];
  badges?: string[];
  likes?: number;
  stars?: number;
  links?: List[];
  index?: List[];
}

interface ServerResponse {
  ok: boolean;
  message: string;
  err?: any;
}

export interface Article extends Content {
  author?: string;
  created?: string;
  slug?: string;
  level?: string;
  views?: number;
  summary?: string;
}

export interface Category extends Content {
  name?: string;
  info?: CategoryInfo;
  icon?: string;
}

export interface ArticleResponse extends ServerResponse {
  articles?: Article[];
  page?: number;
}

export interface CategoryResponse extends ServerResponse {
  category?: Category;
}

export interface CodeResponse extends ServerResponse {
  code?: Code[];
}

export interface UserResponse extends ServerResponse {
  user: User;
  token?: string;
}

export interface CountResponse extends ServerResponse {
  count?: number;
}

export interface CategoryCountResponse extends ServerResponse {
  count?: CategoryCount;
}

export interface CategoryCount {
  HTML?: number;
  CSS?: number;
  Javascript?: number;
  Angular?: number;
  Nodejs?: number;
  MongoDB?: number;
}

export interface Code {
  code: string;
  lang: string;
  description: string;
  level: string;
  tags: string[];
  from: From;
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  account: string;
}

export interface List {
  name: string;
  icon?: string;
  link?: string;
  category?: string;
  class?: string;
}

export interface Testimonial {
  avatar: string;
  name: string;
  location: string;
  testimonial: string;
}

export interface FooterList {
  title: string;
  list: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ToC {
  index: string;
  description: string;
  anchor: string;
}

export interface CategoryInfo {
  creator?: string;
  where?: string;
  site?: string;
  age?: string;
}

export interface From {
  article: string;
  slug: string;
}

export interface ArticleIndex {
  title: string;
  subtitle: string;
  id: string;
}

export interface ScrollSpy {
  onViewport?: boolean;
  id?: string;
}

export interface Config {
  name: string;
  selector: string;
}

export class HttpError {
  name: string;
  message: string;
  status: number;
  text: string;
  url: string;
  author?: string;
  date?: string;

  constructor(name: string,
              message: string,
              status: number,
              text: string,
              url: string,
              author: string) {
    this.name = name;
    this.message = message;
    this.status = status;
    this.text = text;
    this.url = url;
    this.author = author;
  }
}
