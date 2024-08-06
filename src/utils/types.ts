// types of the banner context that provides data about all of the banners and additional functionality are writte below
export interface BannerConetextTypes {
  allBanners: ElementType[];
  selectedBanner: ElementType | undefined;
  onEditBanner: (val: number | undefined) => void;
  selectedBannerKey: number | undefined;
  onChangeBanner: (val: number, newBanner: ElementType) => void
}

// each banner has different elements such as - title, button, description, etc. The text types for each such element is defined below
export interface ElementTextType {
  content: string;
  styles: {
    top: string;
    left: string;
    fontSize: string;
    color: string;
  }
}

// types for element with image is defined below
export interface ElementImageType {
  src: string;
  styles: {
    height: string;
    width: string;
    top: string;
    left: string;
  }
}

// the type of each banner with the corresponding elements is defined below
export interface ElementType {
  key: number;
  title: ElementTextType;
  description: ElementTextType;
  cta: ElementTextType & { styles: { backgroundColor: string; class?: string } };
  image: ElementImageType;
  background: string;
}

// the type of iterables used in configuration of the imageis defined below
export type StyleKeys = "fontSize" | "color" | "top" | "left" | "height" | "width" | "backgroundColor";

export interface PropertyType {
  key: number;
  title: string;
  displayTitle: string;
  iterables: StyleKeys[];
  isContent: boolean;
}