import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import logoPng from "../../assets/logo-nlw-esports.png";
import { Background } from "../../components/Background";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { getGames } from "../../services/api";
import { styles } from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    getGames(setGames);
  }, []);

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoPng} style={styles.logo} />
        <Heading
          title="Encontre seu duo"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
