type LinkData = {
  name: string;
  link: string;
};

export type ProjectData = {
  image: string;
  type: string;
  name: string;
  description: string;
  links: LinkData[];
};
