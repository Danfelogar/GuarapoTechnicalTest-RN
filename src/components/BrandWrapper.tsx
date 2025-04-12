import {StyleSheet, View} from 'react-native';
import React, {JSX, ReactNode} from 'react';
import {StandardWrapper} from './StandardWrapper';
import {AppImages, isIOS, widthFullScreen} from '../utils';
import {CustomImage} from './CustomImage';
import {Shadow} from 'react-native-shadow-2';
import Icon from '@react-native-vector-icons/feather';
export const BrandWrapper = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const {container, header, logoImg} = styles;

  return (
    <StandardWrapper>
      <View style={{...container}}>
        <Shadow
          distance={10}
          startColor={'#0000001A'}
          offset={[-1, isIOS() ? 2 : -3]}>
          <View style={{...header}}>
            <CustomImage src={AppImages.logo} isLocalUrl style={{...logoImg}} />
            <Icon
              name="menu"
              size={widthFullScreen * 0.065}
              color="#0000008A"
            />
          </View>
        </Shadow>
        {children}
      </View>
    </StandardWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: widthFullScreen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthFullScreen * (0.025 * 2),
    paddingVertical: widthFullScreen * (0.025 / 2),
    backgroundColor: '#fff',
  },
  logoImg: {
    width: widthFullScreen * 0.14,
    height: widthFullScreen * 0.14,
    resizeMode: 'contain',
  },
  footer: {
    width: widthFullScreen,
  },
});
