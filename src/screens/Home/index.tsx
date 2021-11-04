import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { View, Text, FlatList, ActivityIndicator,TextInput ,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {EvilIcons } from '@expo/vector-icons';
import { HeroList } from "../../components/HeroList";
import { styles } from "./styles";
import { Data } from "../../@types/interfaces";

export function Home() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
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

  useEffect(() => {
    handleSearchClick()
  },[setSearch]);

  function handleHeroDetails(id: number) {
    navigation.navigate("Details", { id });
  }
  function handleSearchClick() {
    if(search === '') {
      setHeroData(heroData);
    } else {
      setHeroData(
        heroData.filter(item => {
          if(item.name.indexOf(search) > -1) {
            return true
          } else {
            return false
          }
        })
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          value={search}
          placeholder="Pesquisar"
          onChangeText={text => setSearch(text)}
        />
        <TouchableOpacity 
          onPress={handleSearchClick}
          style={styles.searchButton}
        >
          <EvilIcons  name="search" size={26} color="white" />
        </TouchableOpacity>
      </View>
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
