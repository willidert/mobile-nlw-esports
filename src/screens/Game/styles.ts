import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    padding: 32,
    justifyContent: "space-between",
  },
  logo: {
    width: 72,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 340,
    height: 160,
    borderRadius: 8,
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: "flex-start",
  },
  containerList: {
    width: "100%",
  },
  emptyList: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  emptyListContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
