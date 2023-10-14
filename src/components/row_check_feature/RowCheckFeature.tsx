import { Pressable, Text, View } from "react-native";
import { styles } from "./rowCheckFeature.styles"
import theme from "@/themes/theme";

interface IRowCheckFeatureProps {
  action: () => void
  isChecked: boolean
  title: string
}

export default function RowCheckFeature({ action, isChecked, title }: IRowCheckFeatureProps) {
  return (
    <View style={styles.container}>
      <Pressable onPress={action}>
        <View style={[styles.checkBox, { backgroundColor: isChecked ? theme.colors.gray300 : 'transparent' }]} />
      </Pressable>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}