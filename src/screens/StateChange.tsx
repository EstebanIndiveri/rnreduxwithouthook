import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import {changeBackgroundColor} from '../redux/actions';

export interface StateChangeProps {}

const StateChange: React.SFC<StateChangeProps> = (props: any) => {
  const {navigation} = props;

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: props.backgroundColor,
        }}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Unmounted')}>
          <Text>Go To Unmounted Screen</Text>
        </TouchableWithoutFeedback>
      </View>
      <TouchableWithoutFeedback onPress={props.changeBackgroundColor}>
        <View
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.backgroundColor,
          }}>
          <Text>Change Background Color</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
// state o new
const mapStateToProps = (state: any) => {
  const {backgroundColor} = state;
  return {backgroundColor};
};
// Setting channgin modify backgroundColor
const mapDispatchToProps = (dispatch: any) => {
  return {
    changeBackgroundColor: () => dispatch(changeBackgroundColor()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StateChange);
