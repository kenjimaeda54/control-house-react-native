import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { styles } from "./buttonCommon_styles";

interface IButtonCommon extends TouchableOpacityProps {
  style?: StyleProp<ViewStyle>
  text: String
}

export default function ButtonCommon({ style, text, ...rest }: IButtonCommon) {



  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={[styles.buttonSubmit, style]}>
      <Text style={styles.textButtonSubmit}>{text}</Text>
    </TouchableOpacity>
  )
}