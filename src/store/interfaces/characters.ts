import {CharacterRes} from '../../interfaces';

export interface CharactersState {
  //state
  speciesSelected: string;
  statusSelected: string;
  genderSelected: string;
  nameFiltered: string;
  characters: CharacterRes[];
  singleCharacter: CharacterRes | null;
  infoData: {
    count: number;
    pages: number;
    currentPage: number;
  };
  isLoading: boolean;
  //action
  changeSpeciesSelected: (species: string) => void;
  changeStatusSelected: (status: string) => void;
  changeGenderSelected: (gender: string) => void;
  changeNameFiltered: (name: string) => void;
  getCharacters: ({nextPage}: {nextPage?: string}) => void;
  getCharacterById: (id: string) => void;
  resetSingleCharacter: () => void;
  changeInfoData: ({
    count,
    currentPage,
    pages,
  }: {
    count?: number;
    pages?: number;
    currentPage?: number;
  }) => void;
  changeLoading: () => void;
}

export interface CharactersWithoutActions
  extends Omit<
    CharactersState,
    | 'changeSpeciesSelected'
    | 'changeStatusSelected'
    | 'changeGenderSelected'
    | 'changeNameFiltered'
    | 'getCharacters'
    | 'getCharacterById'
    | 'changeInfoData'
    | 'changeLoading'
    | 'resetSingleCharacter'
  > {}
