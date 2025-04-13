import {useEffect} from 'react';
import {useCharactersState} from '../store';

export const useCharacters = () => {
  const {
    //state
    characters,
    infoData,
    isLoading,
    isFirstRenderOnHome,
    //actions
    changeSpeciesSelected,
    changeStatusSelected,
    changeGenderSelected,
    changeNameFiltered,
    getCharacters,
  } = useCharactersState();

  useEffect(() => {
    if (isFirstRenderOnHome) {
      getCharacters({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearFiltersAndGetData = () => {
    changeSpeciesSelected('');
    changeStatusSelected('');
    changeGenderSelected('');
    changeNameFiltered('');
    getCharacters({});
  };

  return {
    //states
    characters,
    infoData,
    isLoading,
    //methods
    //functions
    getCharacters,
    clearFiltersAndGetData,
  };
};
