import React from 'react';
import {View, Text,Button} from 'react-native';

const LostScreen = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>LostScreen</Text>
      <Button title="Go To Game Play" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default LostScreen;
