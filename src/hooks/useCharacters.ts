import {useEffect} from 'react';
import {useCharactersState} from '../store';

export const useCharacters = () => {
  const {
    //state
    characters,
    //actions
    getCharacters,
  } = useCharactersState();

  useEffect(() => {
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    //states
    characters,
    //methods
    //functions
  };
};
