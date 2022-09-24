import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.MD,
  },
  content: {
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: THEME.COLORS.SHAPE,
  },
  closeIcon: {
    alignSelf: "flex-end",
    margin: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  label: {
    marginTop: 12,
    marginBottom: 8,
    alignItems: "center",
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
  },
  discordBtn: {
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    justifyContent: "center",
    alignItems: "center",
    width: 231,
    height: 48,
    borderRadius: 4,
    marginBottom: 32,
  },
});
