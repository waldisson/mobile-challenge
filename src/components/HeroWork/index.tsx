import React, {useState} from "react";
import { View, Text} from "react-native";

import { MaterialCommunityIcons, FontAwesome5, AntDesign   } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { DividerList} from '../DividerList';
import { Work } from '../../@types/interfaces';
import { styles } from "./styles";

type Props = {
  work: Work ;
};

export function HeroWork({ work }: Props) {
  return (
   <View style={styles.container}>
      <DividerList />
      <Text style={styles.title}>Work:</Text>
      <View style={styles. workGroup}>
        <View style={styles.workgroupInfos}>
          <Text>Occupation:</Text> 
          <Text style={styles. workText}>{work.occupation}</Text>
        </View>
        <View style={styles.workgroupInfos}>
          <Text>Base:</Text> 
          <Text style={styles. workText}>{work.base}</Text>
        </View>      
      </View>
   </View>
  );
}
