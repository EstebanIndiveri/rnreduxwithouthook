import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';


const Mounted = ({navigation}:any) => {

    return ( 
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TouchableWithoutFeedback onPress={()=>navigation.navigate('StateChange')}>
            <Text style={{fontSize:25}}>Go to State Change Screen</Text>
            </TouchableWithoutFeedback>
        </View>
     );
}
 
export default Mounted;