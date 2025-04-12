import {useForm} from 'react-hook-form';
import {FilterCharacter} from '../interfaces';
import {useCharactersState} from '../store';
import {useEffect} from 'react';
import {useDebouncedValue} from './useDebouncedValue';
export const useFilterForm = () => {
  const {
    //state
    nameFiltered,
    //actions
    changeSpeciesSelected,
    changeStatusSelected,
    changeGenderSelected,
    changeNameFiltered,
    getCharacters,
  } = useCharactersState();

  const {control, watch} = useForm<
    Omit<
      FilterCharacter,
      'filterByStatus' | 'filterBySpecies' | 'filterByGender'
    >
  >({
    defaultValues: {
      filterByName: nameFiltered,
    },
  });
  const filterByName = watch('filterByName');
  const filterByNameDebounced = useDebouncedValue(filterByName, 700);
  useEffect(() => {
    getCharacters({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNameDebounced]);

  return {
    //state
    filterByName,

    //methods
    control,
    //functions
    changeSpeciesSelected,
    changeStatusSelected,
    changeGenderSelected,
    changeNameFiltered,
  };
};
