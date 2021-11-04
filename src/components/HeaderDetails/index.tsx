import React, {ReactNode} from "react";
import { View, Text} from "react-native";
import {useNavigation} from '@react-navigation/native';
import { BorderlessButton } from "react-native-gesture-handler";
import {Feather } from '@expo/vector-icons';
import { LinearGradient} from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type Props = {
  title: string;
};

export function HeaderDetails({ title }: Props) {
  const navigation = useNavigation();
  const { secondary100, secondary40} = theme.colors;

  function handleGoBack() {
    navigation.goBack();
 }
  return (
    <LinearGradient 
    colors={[secondary100, secondary40]}
    style={styles.container}
  >
      <BorderlessButton onPress={handleGoBack}>
        <Feather 
          name="arrow-left" 
          size={24} 
          color={theme.colors.white}
        />
      </BorderlessButton>
      <Text style={styles.title}>
        {title}
      </Text>

    </LinearGradient>
  );
}
