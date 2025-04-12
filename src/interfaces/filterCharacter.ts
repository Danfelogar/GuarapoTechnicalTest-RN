import {GenderOptions, SpeciesOptions, StatusOptions} from '../utils';

export interface FilterCharacter {
  filterByName: string | null;
  filterByStatus: StatusOptions | null;
  filterBySpecies: SpeciesOptions | null;
  filterByGender: GenderOptions | null;
}
