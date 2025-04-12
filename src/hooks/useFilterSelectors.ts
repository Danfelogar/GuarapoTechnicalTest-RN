import {useForm} from 'react-hook-form';
import {FilterCharacter} from '../interfaces';
import {useCharactersState} from '../store';
import {useEffect} from 'react';
import {GenderOptions, isIOS, SpeciesOptions, StatusOptions} from '../utils';

export const useFilterSelectors = () => {
  const {
    //state
    speciesSelected,
    statusSelected,
    genderSelected,
    //actions
    changeSpeciesSelected,
    changeStatusSelected,
    changeGenderSelected,
    changeNameFiltered,
  } = useCharactersState();

  const {control, watch, setValue, reset} = useForm<
    Omit<FilterCharacter, 'filterByName'>
  >({
    defaultValues: {
      filterByStatus: statusSelected as StatusOptions,
      filterBySpecies: speciesSelected as SpeciesOptions,
      filterByGender: genderSelected as GenderOptions,
    },
  });
  const filterByStatus = watch('filterByStatus');
  const filterBySpecies = watch('filterBySpecies');
  const filterByGender = watch('filterByGender');
  console.log({filterByGender}, isIOS());

  useEffect(() => {
    console.log({
      filterByStatus: statusSelected as StatusOptions,
      filterBySpecies: speciesSelected as SpeciesOptions,
      filterByGender: genderSelected as GenderOptions,
    });
    reset({
      filterByStatus: statusSelected as StatusOptions,
      filterBySpecies: speciesSelected as SpeciesOptions,
      filterByGender: genderSelected as GenderOptions,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      speciesSelected === '' &&
      statusSelected === '' &&
      genderSelected === ''
    ) {
      setValue('filterBySpecies', undefined);
      setValue('filterByStatus', undefined);
      setValue('filterByGender', undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speciesSelected, statusSelected, genderSelected]);

  return {
    //state
    filterByStatus,
    filterBySpecies,
    filterByGender,
    //methods
    control,
    //functions
    changeSpeciesSelected,
    changeStatusSelected,
    changeGenderSelected,
    changeNameFiltered,
  };
};
