import {ReactNode} from 'react';
import {Control, FieldValues} from 'react-hook-form';
import {KeyboardTypeOptions, StyleProp} from 'react-native';

//Input
export interface CustomInputGeneric<T extends FieldValues> {
  borderColor?: string;
  inputStyle?: StyleProp<any>;
  keyboardType?: KeyboardTypeOptions;
  firstIcon?: ReactNode;
  placeholder: string;
  placeholderTextColor: string;
  autoCorrect: boolean;
  isSecretText?: boolean;
  inputColor: string;
  lastIcon?: ReactNode;
  multiline?: boolean;
  multilineStyle?: StyleProp<any>;
  heightMultiline?: number;
  //control
  name: string;
  control: Control<T, any>;
}

//Input Selector
export interface InputSelectProps<T extends FieldValues> {
  iconColor?: string;
  placeHolder: string;
  placeHolderColor?: string;
  items: Array<{label: string; value: string}>;
  //control
  name: string;
  control: Control<T, any>;
}
