import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/evil-icons';
import IonIcons from '@react-native-vector-icons/ionicons';

import {
  BrandWrapper,
  ButtonGeneric,
  CustomImage,
  Footer,
  InputGeneric,
  ModalFilters,
} from '../components';
import {AppImages, heightFullScreen, widthFullScreen} from '../utils';
import {useCharacters, useFilterForm} from '../hooks';
import {Shadow} from 'react-native-shadow-2';
import {useSettingsState} from '../store';
import {useId} from 'react';
import CharacterCard from '../components/CharacterCard';

export const Home = () => {
  const flatListId = useId();
  const {
    container,
    scrollWrapper,
    imgFullLogo,
    inputStyles,
    btnFilter,
    textFilter,
    btnLoadMore,
    shadowShape,
    loadingImg,
    flatListWrapper,
  } = styles;

  const {
    //state
    //methods
    control,
    //functions
    changeNameFiltered,
  } = useFilterForm();

  const {
    //states
    characters,
    infoData,
    //methods
    //functions
    getCharacters,
  } = useCharacters();
  const {
    //states
    isOpenModalFilters,
    //actions
    changeModalFiltersState,
  } = useSettingsState();
  console.log('characters', characters.length);
  return (
    <BrandWrapper>
      <View style={container}>
        <ScrollView
          style={{...scrollWrapper}}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            alignItems: 'center',
          }}>
          <CustomImage
            isLocalUrl
            src={AppImages.fullLogo}
            style={{
              ...imgFullLogo,
            }}
          />
          <InputGeneric
            control={control}
            borderColor={'#00000061'}
            firstIcon={
              <Icon
                name="search"
                size={widthFullScreen * 0.08}
                color={'#00000061'}
              />
            }
            onChangeCallback={val => {
              changeNameFiltered(val);
            }}
            name={'filterByName'}
            inputStyle={inputStyles}
            placeholder="Filter by name..."
            keyboardType="default"
            placeholderTextColor={'#00000061'}
            inputColor={'#000000'}
            autoCorrect={false}
          />
          <Shadow style={{...shadowShape}}>
            <ButtonGeneric
              buttonStyle={btnFilter}
              activeOpacity={0.9}
              onPress={changeModalFiltersState}
              firstIcon={
                <IonIcons
                  name="filter"
                  size={widthFullScreen * 0.06}
                  color={'#919191'}
                />
              }
              textContent={
                <View style={{...container}}>
                  <Text style={{...textFilter}}>ADVANCED FILTERS</Text>
                </View>
              }
            />
          </Shadow>
          <View style={{width: '100%', height: heightFullScreen * 0.04}} />
          {characters.length === 0 ? (
            <CustomImage
              isLocalUrl
              src={AppImages.loading}
              style={{
                ...loadingImg,
              }}
            />
          ) : (
            <FlatList
              contentContainerStyle={{alignItems: 'center'}}
              style={{...flatListWrapper}}
              data={characters}
              renderItem={({item}) => <CharacterCard item={item} />}
              key={flatListId}
              keyExtractor={item => item.id.toString()}
              numColumns={1}
              onEndReached={() => {
                // there should be an automatic fetch here
              }}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              ListFooterComponent={
                <Shadow
                  style={{
                    ...shadowShape,
                    display:
                      infoData.count > characters.length ? 'flex' : 'none',
                  }}>
                  <ButtonGeneric
                    buttonStyle={{...btnFilter, ...btnLoadMore}}
                    activeOpacity={0.7}
                    onPress={() =>
                      getCharacters({
                        nextPage: `${infoData.currentPage + 1}`,
                      })
                    }
                    textContent={
                      <View style={{...container}}>
                        <Text style={{...textFilter}}>load more</Text>
                      </View>
                    }
                  />
                </Shadow>
              }
            />
          )}
        </ScrollView>
      </View>

      {isOpenModalFilters && <ModalFilters />}
      <Footer />
    </BrandWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollWrapper: {
    flex: 1,
    paddingHorizontal: widthFullScreen * (0.025 * 2),
  },
  imgFullLogo: {
    marginVertical: widthFullScreen * 0.05,
    width: '100%',
    height: widthFullScreen * 0.28,
    resizeMode: 'stretch',
  },
  inputStyles: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: widthFullScreen * 0.9,
    height: heightFullScreen * 0.065,
    marginBottom: widthFullScreen * 0.05,
  },
  btnFilter: {
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    width: widthFullScreen * 0.9,
    height: heightFullScreen * 0.065,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthFullScreen * 0.06,
  },
  textFilter: {
    color: '#2196F3',
    fontWeight: '600',
    fontSize: 15.6,
    lineHeight: 16,
    letterSpacing: 1.25,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  btnLoadMore: {
    backgroundColor: '#F2F9FE',
    padding: widthFullScreen * 0.04,
    height: heightFullScreen * 0.052,
    width: widthFullScreen * 0.49,
  },
  shadowShape: {
    borderRadius: 8,
    margin: 'auto',
  },
  loadingImg: {
    width: widthFullScreen * 0.7,
  },
  flatListWrapper: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: heightFullScreen * 0.045,
  },
});
