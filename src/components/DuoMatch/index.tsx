import {
  Modal,
  ModalProps,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { CheckCircle } from "phosphor-react-native";
import { Heading } from "../Heading";
import { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onPressIcon: () => void;
}

export function DuoMatch({ discord, onPressIcon, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);
  async function handleCopyDiscord() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert(
      "Discord copiado!",
      "Discord copiado para área de transferência"
    );
    setIsCopping(false);
  }

  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onPressIcon}>
            <MaterialIcons
              name="close"
              size={30}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            style={styles.header}
            title="Let's play!"
            subtitle="agora é só começar a jogar!"
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            style={styles.discordBtn}
            onPress={handleCopyDiscord}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
