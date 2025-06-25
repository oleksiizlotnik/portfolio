export type Project = {
  id: number,
  name: string,
  short_description: string,
  description: string,
  position: string,
  stack: string[],
  url: string,
  image: string,
  all_images: string[]
}

export type Experience = {
  company: string,
  position?: string,
  description: string,
  stack: string[],
  logo: any,
  start_date: string,
  end_date: string,
  customColor?: boolean,
  link: string,
}