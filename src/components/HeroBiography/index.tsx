import React from "react";
import { View, Text } from "react-native";

import {
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import { DividerList } from "../../components/DividerList";
import { Biography, Appearance } from "../../@types/interfaces";
import { styles } from "./styles";

type Props = {
  biography: Biography;
  appearance: Appearance;
};

export function HeroBiography({ biography, appearance }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appearance:</Text>
      <View style={styles.groupDescription}>
        <View style={styles.groupInfos}>
          <MaterialCommunityIcons
            name="human-greeting"
            size={20}
            color="white"
          />
          <Text style={styles.description}>{appearance.race}</Text>
        </View>
        <View style={styles.groupInfos}>
          <FontAwesome5 name="transgender-alt" size={20} color="white" />
          <Text style={styles.description}>{appearance.gender}</Text>
        </View>
        <View style={styles.groupInfos}>
          <AntDesign name="eye" size={20} color="white" />
          <Text style={styles.description}>{appearance.eyeColor}</Text>
        </View>
      </View>
      <DividerList />
      <Text style={styles.title}>Biography:</Text>

      <View style={styles.bioGroup}>
        <View style={styles.biogroupInfos}>
          <Text style={styles.bioTitle}>Aliases:</Text>
          <Text style={styles.bioText}>{biography.aliases}</Text>
        </View>
        <View style={styles.biogroupInfos}>
          <Text style={styles.bioTitle}>AlterEgos:</Text>
          <Text style={styles.bioText}>{biography.alterEgos}</Text>
        </View>
        <View style={styles.biogroupInfos}>
          <Text style={styles.bioTitle}>PlaceOfBirth:</Text>
          <Text style={styles.bioText}>{biography.placeOfBirth}</Text>
        </View>
        <View style={styles.biogroupInfos}>
          <Text style={styles.bioTitle}>FirstAppearance:</Text>
          <Text style={styles.bioText}>{biography.firstAppearance}</Text>
        </View>
        <View style={styles.biogroupInfos}>
          <Text style={styles.bioTitle}>Publisher:</Text>
          <Text style={styles.bioText}>{biography.publisher}</Text>
        </View>
        <View style={styles.biogroupInfos}>
          <Text style={styles.bioTitle}>Alignment:</Text>
          <Text style={styles.bioText}>{biography.alignment}</Text>
        </View>
      </View>
    </View>
  );
}
