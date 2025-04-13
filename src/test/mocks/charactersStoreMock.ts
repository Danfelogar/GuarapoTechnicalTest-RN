import {create} from 'zustand';
import {type StateCreator} from 'zustand';
import {CharactersState, CharactersWithoutActions} from '../../store';
import {ApiCharactersRes, CharacterRes} from '../../interfaces';
import {buildQueryParams} from '../../utils';
import {MockRickAndMortyApi} from './mockRickAndMortyApi';

export const INITIAL_INFO_DATA_MOCK = {
  count: 0,
  pages: 0,
  currentPage: 1,
};

export const INITIAL_STATE_MOCK: CharactersWithoutActions = {
  speciesSelected: '',
  statusSelected: '',
  genderSelected: '',
  nameFiltered: '',
  singleCharacter: null,
  infoData: INITIAL_INFO_DATA_MOCK,
  isLoading: false,
  characters: [],
};

export const useCharactersStateTest: StateCreator<CharactersState> = (
  set,
  get,
) => ({
  ...INITIAL_STATE_MOCK,
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
      set({infoData: INITIAL_INFO_DATA_MOCK});
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

  resetSingleCharacter: () => {
    set({singleCharacter: null});
  },
  //TODO
  getCharacterById: async id => {
    const currentState = get();
    const {changeLoading} = currentState;
    changeLoading();
    await MockRickAndMortyApi.get<CharacterRes>(`/character/${id}`)
      .then(res => {
        console.log({res});
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
      speciesSelected,
      genderSelected,
      statusSelected,
      nameFiltered,
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
      const res = await MockRickAndMortyApi.get<ApiCharactersRes>(
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
});

export const useCharactersStoreMock = create<CharactersState>(
  useCharactersStateTest,
);
