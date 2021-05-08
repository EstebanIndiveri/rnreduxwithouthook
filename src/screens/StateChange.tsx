import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {Pressable, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeBackgroundColor,
  decreaseFontSize,
  increaseFontSize,
} from '../redux/actions';
import {RootState} from '../redux/store';

export interface StateChangeProps {}

const StateChange: React.SFC<StateChangeProps> = () => {
  const navigation=useNavigation();
  const BackgroundColorState = useSelector(
    (state: RootState) => state.backgroundColorKey,
  );
  // console.log(BackgroundColorState);
  const {backgroundColor} = BackgroundColorState;
  const FontSizeState=useSelector((state:RootState)=>state.fontSizeKey);
  const {fontSize} = FontSizeState;
    const dispatch=useDispatch();
  return (
    <View>
      <View
        style={{
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor,
        }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Unmounted')}>
          <Text style={{fontSize}}>
            Go To Unmounted Screen
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={()=>dispatch(changeBackgroundColor())}>
        <View
          style={{
            width: '100%',
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor
          }}>
          <Text style={{fontSize}}>
            Change Background Color
          </Text>
        </View>
      </TouchableWithoutFeedback>
      <Pressable
        onPress={() => dispatch(decreaseFontSize(fontSize))}
        style={{
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor
        }}>
        <Text style={{fontSize}}>
          Decrease Font Size
        </Text>
      </Pressable>
      <Pressable
        onPress={() =>dispatch(increaseFontSize(fontSize))}
        style={{
          width: '100%',
          height: '20%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor
        }}>
        <Text style={{fontSize}}>
          Increase Font Size
        </Text>
      </Pressable>
    </View>
  );
};
// state o new
// const mapStateToProps = (state: any) => {
//   const {backgroundColorKey, fontSizeKey} = state;
//   return {backgroundColorKey, fontSizeKey};
// };
// Setting channgin modify backgroundColor
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     changeBackgroundColor: bindActionCreators(changeBackgroundColor, dispatch),
//     increaseFontSize: bindActionCreators(increaseFontSize, dispatch),
//     decreaseFontSize: bindActionCreators(decreaseFontSize, dispatch),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(StateChange);
export default (StateChange);



// increaseFontSize: (fontsize: number) =>
// dispatch(increaseFontSize(fontsize)),
// decreaseFontSize: (fontsize: number) =>
//   dispatch(decreaseFontSize(fontsize)),
