import {StyleSheet, Text, View} from 'react-native';
import {isIOS, widthFullScreen} from '../utils';
import {Shadow} from 'react-native-shadow-2';

export const Footer = () => {
  const {footer, footerTitle} = styles;
  return (
    <Shadow
      distance={10}
      startColor={'#0000001A'}
      offset={[-1, isIOS() ? -1 : 3]}>
      <View style={{...footer}}>
        <Text style={{...footerTitle}}>Rick and Morty</Text>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: widthFullScreen,
    flexDirection: 'row',
    height: widthFullScreen * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthFullScreen * (0.025 * 2),
    paddingVertical: widthFullScreen * (0.025 / 2),
    backgroundColor: '#fff',
  },
  footerTitle: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'center',
  },
});
