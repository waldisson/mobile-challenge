import React from "react";
import { theme } from "../../global/styles/theme";
import { View, Text, ImageBackground, StatusBar } from "react-native";
import { HeaderDetails } from "../../components/HeaderDetails";
import { HeroDetails } from "../../components/HeroDetails";

import { styles } from "./styles";

export function Details() {
  const uri =
    "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg";

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
        translucent
      />
      <HeaderDetails title="Detalhes do Herói" />

      <ImageBackground source={{ uri }} style={styles.imageDetails}>
        <View style={styles.imageContent}>
          <Text style={styles.title}>A-Bomb</Text>
          <Text style={styles.subTitle}>Richard Milhouse Jones</Text>
        </View>
      </ImageBackground>
      <HeroDetails />
    </View>
  );
}
