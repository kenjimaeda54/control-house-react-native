import theme from "@/themes/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonSubmit: {
    backgroundColor: '#FF63ED',
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 10,
    width: "100%",
    position: "absolute",
    bottom: 50,
    alignItems: "center"
  },
  textButtonSubmit: {
    fontFamily: theme.fonts.light,
    fontSize: 16,
    color: theme.colors.primary,
  }
})