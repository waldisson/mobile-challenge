import React from "react";
import { View, Text, FlatList } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { Header } from "../../components/Header";
import { HeroList } from "../../components/HeroList";
import { styles } from "./styles";
// import  api from '../../api/api';


export function Home() {
  const navigation = useNavigation();

  function handleHeroDetails() {
    navigation.navigate('Details');
  }
 
  const appointment = [
    {
      id: '1',
      name: "A-Bomb",
      slug: "1-a-bomb",
      powerstats: {
        'intelligence': 38,
        'strength':100,
        'speed': 17
      },
      appearance: {
        "gender": "Male"
      },
      biography: {
        fullName: "Richard Milhouse Jones",
      }
    },
    {
      id: '2',
      name: "Abe Sapien",
      slug: "1-a-bomb",
      powerstats: {
        'intelligence': 38,
        'strength':100,
        'speed': 17
      },
      appearance: {
        "gender": "Male"
      },
      biography: {
        fullName: "Abraham Sapien",
      }
    }
  ]
   return (
    <View style={styles.container}>
      <Header title="Home"/>
      <FlatList
        data={appointment}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <HeroList 
            data={item} 
            onPress={handleHeroDetails}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

