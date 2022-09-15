import { StatusBar, View } from "react-native";
import { Background } from "./src/components/Background";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontLoads] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        translucent
        barStyle={"light-content"}
        backgroundColor="transparent"
      />

      {fontLoads ? <Home /> : <Loading />}
    </Background>
  );
}
