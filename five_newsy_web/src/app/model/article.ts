import { Author } from './author';

export type Article = {
  id: number;
  title: string;
  text: string;
  author: Author;
};
