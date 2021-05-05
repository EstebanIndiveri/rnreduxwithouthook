import React from 'react'
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

export interface UnMountedProps {
    
}
 
const UnMounted: React.SFC<UnMountedProps> = (props:any) => {
    return ( 
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:props.backgroundColor}}>
            <Text>Un Mountaed</Text>
        </View>
     );
}
const mapStateToProps = (state: any) => {
    const {backgroundColor} = state;
    return {backgroundColor};
  };
export default connect(mapStateToProps)(UnMounted);