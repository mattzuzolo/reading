import Genre from '_types/Genre';

type Book = {
  title: string;
  shortTitle?: string;
  slug: string;
  author: string;
  imageSrc: string;
  favorite: boolean;
  reread: boolean;
  genre: Genre;
  note: string;
  stroopwafel: boolean;
};

export default Book;
