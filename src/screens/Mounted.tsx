import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';

const Mounted = (props: any) => {
  const {navigation} = props;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.backgroundColorKey.backgroundColor,
      }}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('StateChange')}>
        <Text style={{fontSize: props.fontSize}}>
          Go to State Change Screen
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
const mapStateToProps = (state: any) => {
  const {backgroundColorKey, fontSizeKey} = state;
  const {fontSize} = fontSizeKey;
  return {backgroundColorKey, fontSize};
};
export default connect(mapStateToProps)(Mounted);
