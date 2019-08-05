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
