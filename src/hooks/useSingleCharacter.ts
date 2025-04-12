import {Episode, EpisodeRes} from '../interfaces';
import {RickAndMortyApi} from '../services';
import {useCharactersState} from '../store';
import {useEffect, useState} from 'react';

interface Props {
  id: string;
}
export const useSingleCharacter = ({id}: Props) => {
  const {
    //state
    singleCharacter,
    //actions
    resetSingleCharacter,
    getCharacterById,
  } = useCharactersState();

  const [appearances, setAppearances] = useState<Episode[]>([]);

  useEffect(() => {
    if (id) {
      getCharacterById(id);
    }
    return () => {
      // Cleanup function
      resetSingleCharacter();
      setAppearances([]);
    };
  }, [id, getCharacterById, resetSingleCharacter]);

  const getSingleEpisodes = async (urlEpisode: string) => {
    await RickAndMortyApi.get<EpisodeRes>(urlEpisode)
      .then(res => {
        setAppearances(oldState => [
          ...oldState,
          {
            id: res.data.id,
            name: res.data.name,
            air_date: res.data.air_date,
            episode: res.data.episode,
          },
        ]);
      })
      .catch(e => {
        console.error(e);
      });
  };

  useEffect(() => {
    if (singleCharacter) {
      singleCharacter.episode.forEach(episode => {
        getSingleEpisodes(episode);
      });
    }
    return () => {
      setAppearances([]);
    };
  }, [singleCharacter]);
  return {
    //state
    singleCharacter,
    appearances,
    //methods
    //functions
    resetSingleCharacter,
  };
};
