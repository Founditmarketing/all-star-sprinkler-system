export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}

export interface Location {
  name: string;
  slug: string;
  description: string;
  zipCodes: string[];
}
