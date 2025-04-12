export interface EpisodeRes {
  id: number;
  name: string;
  air_date: string;
  episode: `S${number}E${number}`;
  characters: string[];
  url: `https://rickandmortyapi.com/api/episode/${number}`;
  created: string;
}

export interface Episode
  extends Omit<EpisodeRes, 'characters' | 'url' | 'created'> {}
