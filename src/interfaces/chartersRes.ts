import {GenderOptions, SpeciesOptions, StatusOptions} from '../utils';

export interface CharacterRes {
  id: number;
  name: string;
  status: StatusOptions;
  species: SpeciesOptions;
  type: string;
  gender: GenderOptions;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface InfoRes {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ApiCharactersRes {
  info: InfoRes;
  results: CharacterRes[];
}
