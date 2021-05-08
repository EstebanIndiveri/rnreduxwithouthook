import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

export interface UnMountedProps {}

const UnMounted: React.SFC<UnMountedProps> = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.backgroundColorKey.backgroundColor,
      }}>
      <Text style={{fontSize: props.fontSize}}>Un Mountaed</Text>
    </View>
  );
};
const mapStateToProps = (state: any) => {
  const {backgroundColorKey, fontSizeKey} = state;
  const {fontSize} = fontSizeKey;
  return {backgroundColorKey, fontSize};
};
export default connect(mapStateToProps)(UnMounted);
