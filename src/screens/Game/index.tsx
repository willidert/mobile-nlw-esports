import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { RouteParams } from "../../@types/navigation";
import logo from "../../assets/logo-nlw-esports.png";
import { AdCard, AdCardProps } from "../../components/AdCard";
import { Background } from "../../components/Background";
import { DuoMatch } from "../../components/DuoMatch";
import { Heading } from "../../components/Heading";
import { getAdsByGame, getDiscordByAd } from "../../services/api";
import { THEME } from "../../theme";
import { styles } from "./styles";

export function Game() {
  const route = useRoute();
  const navigator = useNavigation();

  const game = route.params as RouteParams;
  const [ads, setAds] = useState<AdCardProps[]>([]);
  const [adSelected, setAdSelected] = useState("");

  function handleGoBack() {
    navigator.goBack();
  }

  useEffect(() => {
    getAdsByGame(game.id, setAds);
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
          renderItem={({ item }) => (
            <AdCard
              data={item}
              onConnect={() => {
                getDiscordByAd(item.id, setAdSelected);
              }}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Não há anúncios</Text>
          )}
        />

        <DuoMatch
          visible={adSelected.length > 0}
          discord="Will#123"
          onPressIcon={() => setAdSelected("")}
        />
      </SafeAreaView>
    </Background>
  );
}
