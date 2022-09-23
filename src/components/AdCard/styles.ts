import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    width: 180,
    // height: 340,
    padding: 20,
    alignItems: "center",
  },
  btn: {
    width: "100%",
    height: 36,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    fontSize: THEME.FONT_SIZE.SM,
    marginLeft: 8,
  },
});
