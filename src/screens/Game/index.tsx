import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RouteParams } from "../../@types/navigation";
import logo from "../../assets/logo-nlw-esports.png";
import { AdCard, AdCardProps } from "../../components/AdCard";
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function Game() {
  const route = useRoute();
  const navigator = useNavigation();

  const game = route.params as RouteParams;
  const [ads, setAds] = useState<AdCardProps[]>([]);

  function handleGoBack() {
    navigator.goBack();
  }

  useEffect(() => {
    fetch(`http://192.168.0.2:3333/games/${game.id}/ads`)
      .then((res) => res.json())
      .then((data) => setAds(data))
      .then(() => console.log(ads))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logo} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading title={game.title} subtitle="Concecte-se e comece a jogar!" />
        <FlatList
          style={styles.containerList}
          contentContainerStyle={[
            ads.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          data={ads}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <AdCard data={item} onConnect={() => {}} />}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Não há anúncios</Text>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
