export type Project = {
  id: number;
  name: string;
  short_description: string;
  description: string;
  position: string;
  stack: string[];
  url: string;
  github_url?: string;
  image: string;
  all_images: string[];
};

export type Experience = {
  company: string;
  position?: string;
  description: string;
  stack: string[];
  logo: any;
  start_date: string;
  end_date: string;
  customColor?: boolean;
  link: string;
};

export type Course = {
  id: number;
  title: string;
  headline: string;
  url: string;
  is_published: boolean;
  rating: number;
  num_reviews: number;
};
