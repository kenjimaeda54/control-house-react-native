import theme from "@/themes/theme";
import { Dimensions, StyleSheet } from "react-native";


const { width } = Dimensions.get("window")


export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    width: width,
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
  },

  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 19,
    color: theme.colors.white,
    marginVertical: 15,
  },
  description: {
    fontFamily: theme.fonts.light,
    fontSize: 17,
    lineHeight: 25,
    color: theme.colors.white,
  }

})


