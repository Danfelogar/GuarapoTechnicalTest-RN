import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CharacterRes, RootStackMainParams} from '../interfaces';
import {Shadow} from 'react-native-shadow-2';
import {widthFullScreen} from '../utils';
import {CustomImage} from './CustomImage';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

type NavigationProp = StackScreenProps<RootStackMainParams, 'Details'>;

const CharacterCard: FC<{item: CharacterRes}> = ({item}) => {
  const {
    container,
    characterName,
    imgCharacter,
    contentCharacter,
    characterSpecie,
  } = styles;
  const navigation = useNavigation<NavigationProp['navigation']>();
  return (
    <Shadow>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={() => navigation.navigate('Details', {id: item.id.toString()})}
        style={{...container}}>
        <CustomImage src={item.image} style={{...imgCharacter}} />
        <View
          style={{
            ...contentCharacter,
          }}>
          <Text
            style={{...characterName}}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={{...characterSpecie}}>{item.species}</Text>
        </View>
      </TouchableOpacity>
    </Shadow>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    width: widthFullScreen * 0.87,
    height: widthFullScreen * 0.66,
    backgroundColor: '#fff',
    marginBottom: widthFullScreen * 0.055,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imgCharacter: {
    width: '100%',
    height: widthFullScreen * 0.5,
    resizeMode: 'stretch',
  },
  contentCharacter: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  characterName: {
    color: '#000000DE',
    fontWeight: '500',
    fontSize: 21,
    lineHeight: 30,
    letterSpacing: 0.15,
    textAlignVertical: 'center',
  },
  characterSpecie: {
    color: '#00000099',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
