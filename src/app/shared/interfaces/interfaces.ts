export interface Category {
  name: string;
  icon: string;
  class?: string;
  picture?: string;
}

export interface List {
  name: string;
  picture: string;
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
  category?: string;
  author?: string;
  created?: string;
  message?: string;
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
}

export interface Code {
  code: string;
  lang: string;
  tooltip: boolean;
  description: string;
  level: string;
  tags: string[];
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
