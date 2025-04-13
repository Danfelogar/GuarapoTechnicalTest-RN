// import {renderHook, act} from '@testing-library/react-native';
// import {
//   CHARACTERS_MOCK,
//   INITIAL_INFO_DATA_MOCK,
//   INITIAL_STATE_MOCK,
//   SINGLE_CHARACTER_MOCK,
//   useCharactersStoreMock,
// } from '../../test';
// import {
//   GenderOptions,
//   SpeciesOptions,
//   StatusOptions,
// } from '../../utils/const/enumsFilters';

// describe('Testing charactersStore.ts', () => {
//   test('should return the initial stat', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     //get the initial state from the actual hook
//     const actions = {
//       changeSpeciesSelected: expect.any(Function),
//       changeStatusSelected: expect.any(Function),
//       changeGenderSelected: expect.any(Function),
//       changeNameFiltered: expect.any(Function),
//       changeInfoData: expect.any(Function),
//       changeLoading: expect.any(Function),
//       resetSingleCharacter: expect.any(Function),
//       getCharacterById: expect.any(Function),
//       getCharacters: expect.any(Function),
//     };

//     expect(result.current).toEqual({
//       ...INITIAL_STATE_MOCK,
//       ...actions,
//     });
//   });

//   test('should change loading state', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {changeLoading} = result.current;
//     act(() => {
//       changeLoading();
//     });
//     expect(result.current.isLoading).toBe(true);
//     act(() => {
//       changeLoading();
//     });
//     expect(result.current.isLoading).toBe(false);
//   });

//   test('should change species selected', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {changeSpeciesSelected} = result.current;
//     act(() => {
//       changeSpeciesSelected(SpeciesOptions.HUMAN);
//     });
//     expect(result.current.speciesSelected).toBe(SpeciesOptions.HUMAN);
//   });

//   test('should change status selected', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {changeStatusSelected} = result.current;
//     act(() => {
//       changeStatusSelected(StatusOptions.ALIVE);
//     });
//     expect(result.current.statusSelected).toBe(StatusOptions.ALIVE);
//   });

//   test('should change gender selected', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {changeGenderSelected} = result.current;

//     act(() => {
//       changeGenderSelected(GenderOptions.FEMALE);
//     });

//     expect(result.current.genderSelected).toBe(GenderOptions.FEMALE);
//   });

//   test('should change name filtered', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {changeNameFiltered} = result.current;

//     act(() => {
//       changeNameFiltered('Rick');
//     });

//     expect(result.current.nameFiltered).toBe('Rick');
//   });

//   test('should change info data and reset', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {changeInfoData} = result.current;

//     act(() => {
//       changeInfoData({count: 10, currentPage: 1, pages: 2});
//     });

//     expect(result.current.infoData).toEqual({
//       count: 10,
//       currentPage: 1,
//       pages: 2,
//     });

//     act(() => {
//       changeInfoData({});
//     });

//     expect(result.current.infoData).toEqual(INITIAL_INFO_DATA_MOCK);
//   });

//   test('should reset single character', () => {
//     const {result} = renderHook(() => useCharactersStoreMock());

//     const {resetSingleCharacter} = result.current;
//     act(() => {
//       resetSingleCharacter();
//     });
//     expect(result.current.singleCharacter).toBe(null);
//   });

//   test('should get character by id successfully case', async () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {getCharacterById} = result.current;
//     await act(async () => {
//       await getCharacterById('1');
//     });
//     expect(result.current.singleCharacter).toEqual(SINGLE_CHARACTER_MOCK);
//   });

//   test('should get character by id error case', async () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {getCharacterById} = result.current;
//     await act(async () => {
//       await getCharacterById('0');
//     });
//     expect(result.current.singleCharacter).toBe(null);
//   });

//   test('should get characters success', async () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {getCharacters} = result.current;
//     await act(async () => {
//       await getCharacters({});
//     });
//     expect(result.current.characters).toEqual(CHARACTERS_MOCK.results);
//   });

//   test('should get characters error', async () => {
//     const {result} = renderHook(() => useCharactersStoreMock());
//     const {getCharacters} = result.current;
//     await act(async () => {
//       await getCharacters({nextPage: '9999'});
//     });
//     expect(result.current.characters).toEqual([]);
//     expect(result.current.infoData).toEqual(INITIAL_INFO_DATA_MOCK);
//   });
// });
