import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  View, 
  Text,
  ImageBackground, 
  StatusBar 
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import {styles} from './styles';
import Illustration from '../../assets/Illustration.png'

export function SignIn() {
  const navigation = useNavigation();

  function handleEnterClick() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground source={Illustration}
       style={styles.image} 
       resizeMode="contain"
      >
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} com seus heróis
          </Text>

          <ButtonIcon 
            onPress={handleEnterClick}
            title="Entrar"
            activeOpacity={0.7}
          />
        </View>  
      </ImageBackground> 
    </View> 
  );
}
