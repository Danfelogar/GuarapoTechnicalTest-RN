import {CHARACTERS_MOCK, SINGLE_CHARACTER_MOCK} from './charactersMock';

export const MockRickAndMortyApi = {
  get: async <T>(url: string): Promise<{data: T}> => {
    // timeout to simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));

    //error case for character not found
    if (url === '/character/0') {
      throw new Error('Character not found');
    } else if (url.includes('page=9999')) {
      throw new Error('Bad request for get characters');
    }

    //for all characters
    if (url.includes('/character/?')) {
      return {data: CHARACTERS_MOCK as T};
      //for single character
    } else if (url.startsWith('/character/') && url.split('/').length > 2) {
      return {data: SINGLE_CHARACTER_MOCK as T};
    }

    throw new Error('Endpoint not mocked');
  },
};
