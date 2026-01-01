export interface FashionComponentProps {
  top_image: string;
  b_title: string;
  b_para: string;
  tile_title: string;
  tiles: ThreeHoverPhotoLinksProps[];
  c_title: string;
  c_content: string[];
  offer_para: string[];
  career_para: string[];
}

export interface TableContent {
  registrationFee: number;
  table_title: string;
  course_duration: string;
  feeData: FeeData[];
}

export interface FeeData {
  semester: number;
  semesterFee: number;
  year: number;
  yearlyFee: number | null;
}

export interface OverviewProgrameProps {
  top_image: string;
  b_title: string;
  b_para: string;
  tile_title: string;
  tiles: ThreeHoverPhotoLinksProps[];
}

export interface ThreeHoverPhotoLinksProps {
  image: string;
  title?: string;
  desc?: string;
  link: string;
}

export interface CardObjects {
  imageLink: string;
  aleternateText: string;
  text: string;
  link: string;
}

export interface MasonryItems {
  id: number;
  img: string;
  url: string;
  height: number;
}

export interface subLinks {
  title: string;
  links: string;
}
export interface items {
  title: string;
  href: string;
  photo?: string;
  sublinks?: subLinks[];
}
