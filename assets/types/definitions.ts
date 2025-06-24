export type Project = {
   name: string,
   description: string,
   stack: string[]
}

export type Experience = {
  company: string,
  position: string,
  description: string,
  stack: string[],
  logo: any,
  start_date: string,
  end_date: string,
  customColor?: boolean,
  link: string,
}