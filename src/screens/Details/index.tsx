import React, {useState, useEffect} from "react";
import axios, {AxiosResponse} from "axios";
import { theme } from "../../global/styles/theme";
import { View, Text, ImageBackground, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import { HeaderDetails } from "../../components/HeaderDetails";
import { HeroDetails } from "../../components/HeroDetails";
import { HeroBiography } from "../../components/HeroBiography";
import { HeroWork } from "../../components/HeroWork";
import { HeroConnections } from "../../components/HeroConnections";
import { Data } from '../../@types/interfaces';

import { styles } from "./styles";


export function Details({route} : any) {
  const id = route.params.id;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Data>({} as Data);

  useEffect(() => {
    setLoading(true)
    axios
      .get<Data[]>(`https://akabab.github.io/superhero-api/api/id/${id}.json`)
      .then((response: AxiosResponse) => {
        setData(response.data)
        setLoading(false)
      })
  }, [])
  console.log(data);
  const uri = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg'

  return (
    <View
      style={styles.container}
    >
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
        translucent
      />
      <HeaderDetails title="Detalhes do Herói" />
      {!loading
       ? <ScrollView showsVerticalScrollIndicator={false}>
            <ImageBackground source={{uri: data.images.lg}} style={styles.imageDetails}>
              <View style={styles.imageContent}>
                <Text style={styles.title}>{data.name}</Text>
                <Text style={styles.subTitle}>{data.biography.fullName}</Text>
              </View>
            </ImageBackground>
            <HeroDetails powerstats={data.powerstats}/>
            <HeroBiography  biography={data.biography} appearance={data.appearance}/>
            <HeroConnections connections={data.connections}/>
            <HeroWork work={data.work}/>
         </ScrollView>
       : <ActivityIndicator size="large" color="#fff" /> 
      }
  

    </View>
  );
}
