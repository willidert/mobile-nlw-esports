import React from "react";
import { View, Image, FlatList } from "react-native";

import logoPng from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { GAMES } from "../../utils/games";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoPng} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={GAMES}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  );
}
