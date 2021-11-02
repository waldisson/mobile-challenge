import React from "react";
import { View, Text, FlatList,Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { styles } from "./styles";
import  api from '../../api/api';

export function Home() {

  const Item = ({ data }) => {
    return (
      <View>
        <Text>{data.name}</Text>
        <Text>{data.slug}</Text>
        <Text>{data.powerstats.intelligence}</Text>
        <Image source={data.images.md} />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home"/>
      <FlatList
        data={api}
        keyExtractor={item => item.id}
        renderItem={({item}) => (<Item data={item}/>
        )}
      />
    </SafeAreaView>
  );
}

