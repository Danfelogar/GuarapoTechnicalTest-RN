import {useForm} from 'react-hook-form';
import {FilterCharacter} from '../interfaces';
import {useCharactersState} from '../store';
import {useEffect} from 'react';

export const useFilterForm = () => {
  const {
    //state
    //actions
    changeSpeciesSelected,
    changeStatusSelected,
    changeGenderSelected,
  } = useCharactersState();
  const {control, watch} = useForm<FilterCharacter>();

  const filterByName = watch('filterByName');
  const filterByStatus = watch('filterByStatus');
  const filterBySpecies = watch('filterBySpecies');
  const filterByGender = watch('filterByGender');

  useEffect(() => {
    if (filterByStatus !== null) {
      changeStatusSelected(filterByStatus);
    }
  }, [changeStatusSelected, filterByStatus]);
  useEffect(() => {
    if (filterBySpecies !== null) {
      changeSpeciesSelected(filterBySpecies);
    }
  }, [changeSpeciesSelected, filterBySpecies]);
  useEffect(() => {
    if (filterByGender !== null) {
      changeGenderSelected(filterByGender);
    }
  }, [changeGenderSelected, filterByGender]);

  return {
    //state
    filterByName,
    filterByStatus,
    filterBySpecies,
    filterByGender,
    //methods
    control,
    //functions
  };
};
