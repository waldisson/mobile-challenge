import React from "react";
import { View, Text} from "react-native";

import { Connections } from '../../@types/interfaces';
import { DividerList} from '../DividerList';
import { styles } from "./styles";

type Props = {
  connections: Connections;
};

export function HeroConnections({ connections }: Props) {
  return (
   <View style={styles.container}>
      <DividerList />
      <Text style={styles.title}>Connections:</Text>
      <View style={styles. workGroup}>
        <View style={styles.workgroupInfos}>
          <Text>GroupAffiliation:</Text> 
          <Text style={styles. workText}>{connections.groupAffiliation}</Text>
        </View>
        <View style={styles.workgroupInfos}>
          <Text>Relatives:</Text> 
          <Text style={styles. workText}>{connections.relatives}</Text>
        </View>      
      </View>
   </View>
  );
}
