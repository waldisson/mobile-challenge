import React, {useState} from "react";
import { View, Text} from "react-native";
import { AntDesign  } from '@expo/vector-icons';


import { styles } from "./styles";


export type AppearanceProps = {
  gender: string;
  race: string;
  eyeColor: string;
  hairColor:string;
};
export type BiographyProps = {
  fullName: string;
};
export type PowerStatsProps = {
  intelligence: number;
  strength: number;
  speed: number;
  // durability:number;
  // power: number;
  // combat: number;
};

export type HeroListProps = {
  id: string;
  name: string;
  slug: string;
  powerstats: PowerStatsProps;
  // appearance: AppearanceProps;
  biography: BiographyProps;

};

type Props = {
  data?: HeroListProps;
};

export function HeroDetails({ data, ...rest }: Props) {
  return (
   <View style={styles.container}>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>INT</Text>
        <Text style={styles.glossaryValue}>38</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>STR</Text>
        <Text style={styles.glossaryValue}>100</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>SPD</Text>
        <Text style={styles.glossaryValue}>17</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>DUR</Text>
        <Text style={styles.glossaryValue}>80</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>POW</Text>
        <Text style={styles.glossaryValue}>24</Text>
      </View>
      <View style={styles.glossary}>
        <Text style={styles.glossaryTitle}>CMB</Text>
        <Text style={styles.glossaryValue}>64</Text>
      </View>
     
   </View>
  );
}
