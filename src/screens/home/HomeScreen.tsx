import { Text, View, Image } from "react-native";
import theme from "@/themes/theme";
import RowCheckFeature from "@/components/row_check_feature/RowCheckFeature";
import { styles } from "./home.styles";



export default function HomeScreen() {
  return (
    <View style={styles.container} >
      <Image style={styles.image} source={require("../../assets/people.png")} resizeMode="contain" />
      <RowCheckFeature isChecked={false} action={() => { }} title="Interruptor (apagar e acender)" />
      <RowCheckFeature isChecked={true} action={() => { }} title="Acender é apagar apos alguns segundos" />
      <RowCheckFeature isChecked={true} action={() => { }} title="Acender apos alguns segundos " />
    </View>

  )
}