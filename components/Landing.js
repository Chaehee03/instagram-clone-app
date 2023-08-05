import React from 'react';
import {View, Text, Button} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        title="Register"
        onPress={() => {
          navigation.nagivate('Register');
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.nagivate('Login');
        }}
      />
    </View>
  );
};

export default Landing;
