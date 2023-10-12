import { Text, View } from "react-native";
import * as Styles from "@/screens/home/home.styles"

export default function HomeScreen() {
  return(
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
    <Styles.Title>Ola</Styles.Title>
    </View>

  )
}