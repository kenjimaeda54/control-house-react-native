import theme from "@/themes/theme";
import { StyleSheet } from "react-native";





export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  imageHeader: {
    width: 20,
    height: 20,
  },
  button: {
    position: "absolute",
    bottom: 100,
    left: 20,
    right: 20,
  },
  textFeature: {
    fontFamily: theme.fonts.light,
    fontSize: 17,
    color: theme.colors.white,
    position: "absolute",
    bottom: 100,
  }

})
