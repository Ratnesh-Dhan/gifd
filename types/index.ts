export interface OverviewProgrameProps {
    top_image: string;
    b_title: string;
    b_para: string;
    tile_title: string;
    tiles: ThreeHoverPhotoLinksProps[];
  }

export interface ThreeHoverPhotoLinksProps {
  image: string;
  title: string;
  desc: string;
  link: string;
}