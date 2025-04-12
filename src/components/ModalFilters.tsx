import {Fragment} from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from '@react-native-vector-icons/feather';

import {StandardWrapper} from './StandardWrapper';
import {
  enumToSelectItems,
  GenderOptions,
  heightFullScreen,
  SpeciesOptions,
  StatusOptions,
  widthFullScreen,
} from '../utils';
import {useSettingsState} from '../store';
import {Shadow} from 'react-native-shadow-2';
import {ButtonGeneric} from './ButtonGeneric';
import {InputSelect} from './inputs';
import {useFilterForm} from '../hooks';

export const ModalFilters = () => {
  const {
    containerModal,
    modalContent,
    titleHeader,
    titleModal,
    shadowShape,
    btnFilter,
    textFilter,
  } = styles;

  const {
    //states
    isOpenModalFilters,
    //actions
    changeModalFiltersState,
  } = useSettingsState();

  const {
    //state
    //methods
    control,
    //functions
  } = useFilterForm();
  return (
    //not working in react-native-0.76 and versions post in android(Modal of react-native)
    <Fragment>
      {isOpenModalFilters && (
        <StandardWrapper>
          <Modal
            visible={isOpenModalFilters}
            transparent
            onRequestClose={changeModalFiltersState}
            animationType="slide">
            <View style={containerModal}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={changeModalFiltersState}
                style={{
                  width: widthFullScreen,
                  height: heightFullScreen,
                }}
              />
              <View style={modalContent}>
                <View style={titleHeader}>
                  <Text style={{...titleModal}}>Filters</Text>
                  <Feather
                    onPress={changeModalFiltersState}
                    name="x"
                    size={heightFullScreen / 32}
                    color={'#00000061'}
                  />
                </View>
                <InputSelect
                  items={enumToSelectItems(SpeciesOptions)}
                  control={control}
                  name="filterBySpecies"
                  placeHolder="Species"
                  iconColor="#00000061"
                  placeHolderColor="#00000061"
                />
                <InputSelect
                  items={enumToSelectItems(GenderOptions)}
                  control={control}
                  name="filterByGender"
                  placeHolder="Gender"
                  iconColor="#00000061"
                  placeHolderColor="#00000061"
                />
                <InputSelect
                  items={enumToSelectItems(StatusOptions)}
                  control={control}
                  name="filterByStatus"
                  placeHolder="Status"
                  iconColor="#00000061"
                  placeHolderColor="#00000061"
                />
                <View
                  style={{width: '100%', height: heightFullScreen * 0.015}}
                />
                <Shadow
                  style={{
                    ...shadowShape,
                  }}>
                  <ButtonGeneric
                    buttonStyle={{...btnFilter}}
                    activeOpacity={0.7}
                    onPress={changeModalFiltersState}
                    textContent={
                      <View style={{flex: 1}}>
                        <Text style={{...textFilter}}>apply</Text>
                      </View>
                    }
                  />
                </Shadow>
              </View>
            </View>
          </Modal>
        </StandardWrapper>
      )}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'relative',
  },
  modalContent: {
    position: 'absolute',
    borderRadius: widthFullScreen * 0.015,
    width: widthFullScreen * 0.8,
    height: heightFullScreen * 0.38,
    padding: heightFullScreen * 0.02,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    elevation: 24, // Para sombra en Android
    zIndex: 100,
  },
  titleHeader: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleModal: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    letterSpacing: 0.15,
    textAlignVertical: 'center',
    color: '#000000DE',
  },
  contentListItems: {
    width: '100%',
    paddingBottom: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  shadowShape: {
    borderRadius: 8,
    margin: 'auto',
  },
  btnFilter: {
    backgroundColor: '#E3F2FD',
    borderRadius: 8,
    width: '100%',
    height: heightFullScreen * 0.05,
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
});
