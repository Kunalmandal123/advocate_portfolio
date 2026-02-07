
export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  process: string[];
  timeline: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  content: string;
  rating: number;
}

export interface Resource {
  id: string;
  title: string;
  type: 'PDF' | 'Template' | 'Guide';
  size: string;
}
