export interface Categories {
  name: string;
  icon: string;
  class?: string;
  picture?: string;
}

export interface AppData {
  articles: Article[];
  categories: Category[];
}

export interface List {
  name: string;
  picture: string;
  link?: string;
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

export interface MenuLink {
  name: string;
  link: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Related {
  title: string;
  picture: string;
  category: string;
  icon: string;
}

export interface ToC {
  index: string;
  description: string;
  anchor: string;
}

export interface Article {
  _id?: string;
  title?: string;
  message?: string;
  author?: string;
  category?: string;
  created?: string;
  slug?: string;
  cover?: string;
  code?: Code[];
  tags?: string[];
  level?: string;
  likes?: number;
  views?: number;
  stars?: number;
  links?: Link[];
  summary?: string;
}

export interface ArticleResponse {
  ok: boolean;
  message: string;
  articles?: Article[];
  count?: number;
}

export interface Category {
  _id?: string;
  name?: string;
  title?: string;
  category?: string;
  info?: Info;
  message?: string;
  icon?: string;
  cover?: string;
  code?: Code[];
  badges?: string[];
  tags?: string[];
  likes?: number;
  stars?: number;
  links?: Link[];
}

export interface CategoryResponse {
  ok: boolean;
  message: string;
  category?: Category;
  categories?: Category[];
}

export interface Code {
  code: string;
  lang: string;
  description: string;
  level: string;
  tags: string[];
  from: From;
}

export interface CodeResponse {
  ok: boolean;
  message: string;
  code?: Code[];
  count?: number;
}

export interface Link {
  name: string;
  url: string;
}

export interface MenuDropdown {
  name: string;
  link: string;
  icon: string;
}

export interface Info {
  creator?: string;
  where?: string;
  site?: string;
  age?: string;
}

export interface From {
  article: string;
  slug: string;
}
