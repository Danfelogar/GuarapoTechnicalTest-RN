export interface SettingsState {
  // state
  isOpenModalFilters: boolean;
  // actions
  changeModalFiltersState: () => void;
}

export interface SettingsWithoutActions
  extends Omit<SettingsState, 'changeModalFiltersState'> {}
