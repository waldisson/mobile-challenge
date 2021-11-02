import React from "react";
import {Image} from "react-native";

import { styles } from "./styles";

export function HeroImage() {
  const uri = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg'
  return (
   <Image 
    source={{ uri }}
    style={styles.photo}
    resizeMode="cover"
   />
  );
}
