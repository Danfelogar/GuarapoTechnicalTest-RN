import {create} from 'zustand';

import {SettingsState, SettingsWithoutActions} from './interfaces';

const INITIAL_STATE: SettingsWithoutActions = {
  isOpenModalFilters: false,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useSettingsState = create<SettingsState>((set, get) => ({
  ...INITIAL_STATE,
  //actions
  changeModalFiltersState: () => {
    set(oldState => ({
      isOpenModalFilters: !oldState.isOpenModalFilters,
    }));
  },
}));
