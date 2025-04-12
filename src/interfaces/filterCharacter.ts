import {GenderOptions, SpeciesOptions, StatusOptions} from '../utils';

export interface FilterCharacter {
  filterByName: string | undefined;
  filterByStatus: StatusOptions | undefined;
  filterBySpecies: SpeciesOptions | undefined;
  filterByGender: GenderOptions | undefined;
}
