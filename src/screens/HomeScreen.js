import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Willkommen zur AR Navigation!</Text>
      <Button
        title="Starten Sie die Navigation"
        onPress={() => navigation.navigate('Navigation')}
      />
    </View>
  );
};

export default HomeScreen;