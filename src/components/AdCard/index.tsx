import { TouchableOpacity, View, Text } from "react-native";

import { THEME } from "../../theme";
import { AdInfo } from "../AdInfo/AdInfo";
import { styles } from "./styles";

import { GameController } from "phosphor-react-native";

export interface AdCardProps {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: string;
  hourStart: string;
  hourEnd: string;
}

interface Props {
  data: AdCardProps;
  onConnect: () => void;
}

export function AdCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <AdInfo label="Nome" value={data.name} />

      <AdInfo
        label="Tempo de jogo"
        value={`${data.yearsPlaying} ${
          parseInt(data.yearsPlaying) > 1 ? "anos" : "ano"
        }`}
      />

      <AdInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} ${
          data.weekDays.length > 1 ? "dias" : "dia"
        } \u2022 ${data.hourStart}h - ${data.hourEnd}h`}
      />

      <AdInfo
        label="Chamada de áudio?"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.btn} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.btnTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
