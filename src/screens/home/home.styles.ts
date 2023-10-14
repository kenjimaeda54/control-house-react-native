import theme from "@/themes/theme";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center'
  },
  image: {
    width: "100%"
  }

})