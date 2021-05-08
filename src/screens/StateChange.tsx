import React from 'react';
import {Pressable, Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {
  changeBackgroundColor,
  decreaseFontSize,
  increaseFontSize,
} from '../redux/actions';

export interface StateChangeProps {}

const StateChange: React.SFC<StateChangeProps> = (props: any) => {
  const {navigation} = props;

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColorKey.backgroundColor,
        }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Unmounted')}>
          <Text style={{fontSize: props.fontSizeKey.fontSize}}>
            Go To Unmounted Screen
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={props.changeBackgroundColor}>
        <View
          style={{
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.backgroundColorKey.backgroundColor,
          }}>
          <Text style={{fontSize: props.fontSizeKey.fontSize}}>
            Change Background Color
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Pressable
        onPress={() => props.decreaseFontSize(props.fontSize)}
        style={{
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColorKey.backgroundColor,
        }}>
        <Text style={{fontSize: props.fontSizeKey.fontSize}}>
          Decrease Font Size
        </Text>
      </Pressable>
      <Pressable
        onPress={() => props.increaseFontSize(props.fontSizeKey.fontSize)}
        style={{
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColorKey.backgroundColor,
        }}>
        <Text style={{fontSize: props.fontSizeKey.fontSize}}>
          Increase Font Size
        </Text>
      </Pressable>
    </View>
  );
};
// state o new
const mapStateToProps = (state: any) => {
  const {backgroundColorKey, fontSizeKey} = state;
  return {backgroundColorKey, fontSizeKey};
};
// Setting channgin modify backgroundColor
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeBackgroundColor: () => dispatch(changeBackgroundColor()),
    increaseFontSize: (fontsize: number) =>
      dispatch(increaseFontSize(fontsize)),
    decreaseFontSize: (fontsize: number) =>
      dispatch(decreaseFontSize(fontsize)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StateChange);
