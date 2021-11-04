import React, { useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Data } from "../../@types/interfaces";

import { styles } from "./styles";

type Props = RectButtonProps & {
  data: Data;
};

export function HeroList({ data, ...rest }: Props) {
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={{ uri: data.images.sm }}
            style={styles.photo}
            resizeMode="cover"
          />
          <View style={styles.body}>
            <View style={styles.info}>
              <Text style={styles.title}>{data.name}</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
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
