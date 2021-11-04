import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Header } from "../../components/Header";
import { useNavigation } from "@react-navigation/native";
import { HeroList } from "../../components/HeroList";
import { styles } from "./styles";
import { Data } from "../../@types/interfaces";

export function Home() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState<Data[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get<Data[]>("https://akabab.github.io/superhero-api/api/all.json")
      .then((response: AxiosResponse) => {
        setHeroData(response.data);
        setLoading(false);
      });
  }, []);

  function handleHeroDetails(id: number) {
    navigation.navigate("Details", { id });
  }

  return (
    <View style={styles.container}>
      <Header title="Home" />
      {!loading ? (
        <FlatList
          data={heroData}
          initialNumToRender={10}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <HeroList data={item} onPress={() => handleHeroDetails(item.id)} />
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
}
