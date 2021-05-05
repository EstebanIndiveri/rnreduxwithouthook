import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';


const Mounted = (props:any) => {
    const {navigation}=props;

    return ( 
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:props.backgroundColor}}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('StateChange')}>
            <Text style={{fontSize:25}}>Go to State Change Screen</Text>
            </TouchableWithoutFeedback>
        </View>
     );
}
const mapStateToProps = (state: any) => {
    const {backgroundColor} = state;
    return {backgroundColor};
  };
export default connect(mapStateToProps)(Mounted);