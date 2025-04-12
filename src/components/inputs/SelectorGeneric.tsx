import {StyleSheet, View} from 'react-native';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
import RNPickerSelect from 'react-native-picker-select';
import {heightFullScreen} from '../../utils';
import {Controller, FieldValues, Path} from 'react-hook-form';
import {InputSelectProps} from '../../interfaces';

export const InputSelect = <T extends FieldValues>({
  control,
  name,
  items,
  placeHolder,
  iconColor,
  placeHolderColor,
}: InputSelectProps<T>) => {
  const {iconContainer, placeholder, inputAndroid, inputIOS} = styles;

  return (
    <Controller
      shouldUnregister
      control={control}
      name={name as Path<T>}
      render={({field: {onChange, value = ''}}) => {
        return (
          <View style={{width: '100%'}}>
            <RNPickerSelect
              Icon={() => {
                return (
                  <FontAwesome6
                    name="caret-down"
                    iconStyle="solid"
                    size={heightFullScreen / 38}
                    color={iconColor}
                  />
                );
              }}
              onValueChange={(val: any) => {
                onChange(val);
              }}
              items={items}
              placeholder={{
                label: placeHolder,
                value: '',
                color: placeHolderColor,
              }}
              value={value}
              style={{
                inputIOSContainer: {
                  pointerEvents: 'none',
                },
                inputIOS: inputIOS,
                inputAndroid: inputAndroid,
                iconContainer: iconContainer,
                placeholder: placeholder,
              }}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  inputIOS: {
    color: '#000000',
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#00000061',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',
  },
  inputAndroid: {
    color: '#000000',
    fontSize: 15,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#00000061',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 20,
    width: '100%',
    height: 50,
    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    top: 10,
    right: 12,
  },
  placeholder: {
    color: '#00000061',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 19,
    letterSpacing: 0,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
});
