export interface Book {
  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle?: string;
  rating?: number;
  thumbnails?: Thumbnail[];
  description?: string;
}

export interface Thumbnail {
  url: string;
  title?: string;
}

export type ViewState = 'list' | 'details';

// export enum ViewState {
//   list = 'list',
//   details = 'details'
// }
