import {create} from 'zustand';
import {CharactersState, CharactersWithoutActions} from './interfaces';
import {RickAndMortyApi} from '../services';
import {ApiCharactersRes, CharacterRes} from '../interfaces';
import {buildQueryParams} from '../utils';

const INITIAL_INFO_DATA = {
  count: 0,
  pages: 0,
  currentPage: 1,
};

const INITIAL_STATE: CharactersWithoutActions = {
  speciesSelected: '',
  statusSelected: '',
  genderSelected: '',
  nameFiltered: '',
  singleCharacter: null,
  infoData: INITIAL_INFO_DATA,
  isLoading: false,
  isFirstRenderOnHome: true,
  characters: [],
};

export const useCharactersState = create<CharactersState>((set, get) => ({
  ...INITIAL_STATE,
  //actions
  changeSpeciesSelected: species => {
    set({speciesSelected: species});
  },
  changeStatusSelected: status => {
    set({statusSelected: status});
  },
  changeGenderSelected: gender => {
    set({genderSelected: gender});
  },
  changeNameFiltered: name => {
    set({nameFiltered: name});
  },
  changeInfoData: ({count, currentPage, pages}) => {
    if (!count && !currentPage && !pages) {
      set({infoData: INITIAL_INFO_DATA});
    } else {
      set(oldState => ({
        infoData: {
          ...oldState.infoData,
          count: count ?? oldState.infoData.count,
          currentPage: currentPage ?? oldState.infoData.currentPage,
          pages: pages ?? oldState.infoData.pages,
        },
      }));
    }
  },
  changeLoading: () => {
    set(oldState => ({
      isLoading: !oldState.isLoading,
    }));
  },
  changeFirstRenderOnHome: (val: boolean = true) => {
    set({
      isFirstRenderOnHome: val,
    });
  },
  //TODO
  resetSingleCharacter: () => {
    set({singleCharacter: null});
  },
  getCharacterById: async id => {
    const currentState = get();
    const {changeLoading} = currentState;
    changeLoading();
    await RickAndMortyApi.get<CharacterRes>(`/character/${id}`)
      .then(res => {
        set({
          singleCharacter: res.data,
        });
      })
      .catch(e => {
        console.error(e);
        set({
          singleCharacter: null,
        });
      })
      .finally(() => {
        changeLoading();
      });
  },
  getCharacters: async ({nextPage = '1'}: {nextPage?: string}) => {
    const currentState = get();
    const {
      changeLoading,
      changeInfoData,
      changeFirstRenderOnHome,
      speciesSelected,
      genderSelected,
      statusSelected,
      nameFiltered,
      isFirstRenderOnHome,
    } = currentState;
    changeLoading();
    try {
      const params = buildQueryParams({
        species: speciesSelected,
        gender: genderSelected,
        status: statusSelected,
        page: nextPage,
        name: nameFiltered,
      });
      const res = await RickAndMortyApi.get<ApiCharactersRes>(
        `/character/?${params.toString()}`,
      );
      const {info, results} = res.data;
      set(oldState => ({
        characters:
          nextPage === '1' ? results : [...oldState.characters, ...results],
        infoData: {
          count: info.count,
          pages: info.pages,
          currentPage: Number(nextPage),
        },
      }));
      if (isFirstRenderOnHome) changeFirstRenderOnHome(false);
    } catch (e) {
      console.error(e);
      set({
        characters: [],
      });
      changeInfoData({});
    } finally {
      changeLoading();
    }
  },
}));
