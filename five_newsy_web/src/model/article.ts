import { author } from './author';

export type article = {
  id: number;
  title: string;
  text: string;
  author: author;
};
