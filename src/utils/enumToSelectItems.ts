export const enumToSelectItems = <T extends Record<string, string>>(
  enumObj: T,
): Array<{label: string; value: string}> => {
  return Object.values(enumObj).map(value => ({
    label: value,
    value: value,
  }));
};
