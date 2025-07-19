export interface Service {
  name: string;
  slug: string;
  description: string;
  sub_services: SubService[];
}

export interface SubService {
  name: string;
  description: string;
}

export interface CaseStudy {
  title: string;
  slug: string;
  service: string;
  client: string;
  images: string[];
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  featured: boolean;
}

export interface ContactForm {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  gdprConsent: boolean;
}

export interface QuoteData {
  services: string[];
  budget: number;
  contact: {
    name: string;
    email: string;
    company: string;
    message: string;
  };
}