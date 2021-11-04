import React from "react";
import { View, Text} from "react-native";
import { PowerStats } from "../../@types/interfaces";


import { styles } from "./styles";

type Props = {
  powerstats: PowerStats;
};

export function HeroDetails({ powerstats }: Props) {
  return (
   <View style={styles.container}>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>INT</Text>
        <Text style={styles.glossaryValue}>{powerstats.intelligence}</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>STR</Text>
        <Text style={styles.glossaryValue}>{powerstats.strength}</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>SPD</Text>
        <Text style={styles.glossaryValue}>{powerstats.speed}</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>DUR</Text>
        <Text style={styles.glossaryValue}>{powerstats.durability}</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>POW</Text>
        <Text style={styles.glossaryValue}>{powerstats.power}</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>CMB</Text>
        <Text style={styles.glossaryValue}>{powerstats.combat}</Text>
      </View>
     
   </View>
  );
}
