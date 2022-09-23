import { ColorValue, Text, View } from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

interface InfoProps {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export function AdInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}: InfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text numberOfLines={1} style={[styles.value, { color: colorValue }]}>
        {value}
      </Text>
    </View>
  );
}
