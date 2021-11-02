import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity,TouchableOpacityProps,} from "react-native";
import {EvilIcons } from '@expo/vector-icons';

import { styles } from "./styles";

type Props = {
  title: string;
};

export function Header({ title, ...rest }: Props) {
  const [search, setSearch] = useState('')
 
  function handleSearchClick() {
    alert('pesquisar')
  }
  return (
    <View style={styles.header}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        onChangeText={text => setSearch(text)}
        defaultValue={search}
      />
      <TouchableOpacity 
        onPress={handleSearchClick}
        style={styles.searchButton}
      >
        <EvilIcons  name="search" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}
