import {StackScreenProps} from '@react-navigation/stack';
import Feather from '@react-native-vector-icons/feather';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {RootStackMainParams} from '../interfaces';
import {useSingleCharacter} from '../hooks';
import {BrandWrapper, ButtonGeneric, CustomImage, Footer} from '../components';
import {heightFullScreen, widthFullScreen} from '../utils';
import InfoDetail from '../components/InfoDetail';
interface Props extends StackScreenProps<RootStackMainParams, 'Details'> {}

export const Details = ({route, navigation}: Props) => {
  const {id} = route.params;

  const {
    container,
    textGoBack,
    btnGoBack,
    wrapperGoBack,
    circleMainImg,
    textName,
    textDescription,
  } = styles;

  const {
    //state,
    singleCharacter,
    appearances,
    //methods
    //functions
    resetSingleCharacter,
  } = useSingleCharacter({id});
  return (
    <BrandWrapper isDetails>
      {singleCharacter && (
        <View style={{...container}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{width: '100%'}}>
            <View style={{paddingHorizontal: widthFullScreen * (0.025 * 2)}}>
              <ButtonGeneric
                buttonStyle={btnGoBack}
                activeOpacity={0.9}
                onPress={() => {
                  navigation.goBack();
                  resetSingleCharacter();
                }}
                firstIcon={
                  <Feather
                    name="arrow-left"
                    size={widthFullScreen * 0.06}
                    color={'#000000'}
                  />
                }
                textContent={
                  <View style={{...wrapperGoBack}}>
                    <Text style={{...textGoBack}}>go back</Text>
                  </View>
                }
              />
              <CustomImage
                src={singleCharacter?.image ?? ''}
                style={{...circleMainImg}}
              />

              <Text style={{...textName}}>{singleCharacter.name}</Text>
              <Text style={{...textDescription}}>Informations</Text>
              <InfoDetail title={'Gender'} subTitle={singleCharacter?.gender} />
              <InfoDetail title={'Status'} subTitle={singleCharacter?.status} />
              <InfoDetail
                title={'Specie'}
                subTitle={singleCharacter?.species}
              />
              <InfoDetail
                title={'Origin'}
                subTitle={singleCharacter?.origin.name}
              />
              <InfoDetail
                title={'Type'}
                subTitle={
                  singleCharacter?.type === ''
                    ? 'Unknown'
                    : singleCharacter?.type
                }
              />
              <InfoDetail
                title={'Location'}
                subTitle={singleCharacter?.location.name}
              />
              <Text style={{...textDescription}}>Episodes</Text>
              {appearances.length > 0 &&
                appearances.map(episode => (
                  <InfoDetail
                    key={episode.id}
                    title={episode.name}
                    subTitle={episode.episode}
                    secondSubTitle={episode.air_date}
                  />
                ))}
            </View>
            <Footer />
          </ScrollView>
        </View>
      )}
    </BrandWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: widthFullScreen * (0.025 * 2),

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  btnGoBack: {
    width: widthFullScreen * 0.35,
    height: heightFullScreen * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperGoBack: {
    flex: 1,
  },
  textGoBack: {
    fontWeight: '700',
    fontSize: 18,
    marginLeft: widthFullScreen * 0.02,
    textTransform: 'uppercase',
  },
  circleMainImg: {
    marginVertical: widthFullScreen * 0.03,
    marginHorizontal: 'auto',
    width: widthFullScreen * 0.5,
    height: widthFullScreen * 0.5,
    borderRadius: (widthFullScreen * 0.5) / 2,
    borderColor: '#F2F2F7',
    borderWidth: 5,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    color: '#081F32',
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    marginTop: widthFullScreen * 0.03,
    marginHorizontal: 'auto',
  },
  textDescription: {
    color: '#8E8E93',
    fontWeight: '500',
    fontSize: 21,
    lineHeight: 24,
    letterSpacing: 0.15,
    textAlignVertical: 'center',
    marginTop: widthFullScreen * 0.08,
    marginBottom: widthFullScreen * 0.06,
    includeFontPadding: false,
  },
});
