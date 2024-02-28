export type Mountain = {
  id: string;
  title: string;
  description: string;
  image: string;
  height: string;
  continent: string;
};

export type MountainShort = Pick<Mountain, 'id' | 'title'>;

