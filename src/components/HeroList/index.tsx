import React, {useState} from "react";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text, TextInput, TouchableOpacity,TouchableOpacityProps,} from "react-native";
import { AntDesign  } from '@expo/vector-icons';
import { HeroImage } from '../HeroImage';

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

type Props = RectButtonProps & {
  data: HeroListProps;
};

export function HeroList({ data, ...rest }: Props) {
  return (
    <RectButton {...rest}>
     <View style={styles.container}>
      <View style={styles.content}>
       <HeroImage />

         <View style={styles.body}>
            <View style={styles.info}>
              <Text style={styles.title}>
                {data.name}
              </Text>
              <Text style={styles.subtitle}>
                {data.biography.fullName}
              </Text>
            </View>

            <TouchableOpacity style={styles.arrow}>
            <AntDesign name="doubleright" size={18} color="red" />
            </TouchableOpacity>

         </View>
       </View>
     </View>
    </RectButton>
  );
}
