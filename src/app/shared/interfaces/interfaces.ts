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
