import React from 'react'
import { Text, View } from 'react-native';

export interface UnMountedProps {
    
}
 
const UnMounted: React.SFC<UnMountedProps> = () => {
    return ( 
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Un Mountaed</Text>
        </View>
     );
}
 
export default UnMounted;