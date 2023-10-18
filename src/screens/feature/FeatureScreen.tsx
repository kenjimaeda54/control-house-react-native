import { TypeFeature } from "@/view_models/HomeViewModel";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { styles } from "./featureScreen.styles"
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ButtonCommon from "@/components/button_common/ButtonCommon";
import useFeatureViewModel from "@/view_models/FeatureViewModel";


export default function FeatureScreen() {
  const { top } = useSafeAreaInsets()
  const { pathImage, handleFeatureToogle, handleBack, textButton, textFeature } = useFeatureViewModel()

  return (
    <View style={styles.container} >
      <View style={[styles.header, { marginTop: top }]}>
        <TouchableOpacity onPress={handleBack}>
          <Image style={styles.imageHeader} source={require("../../assets/back.png")} resizeMode="contain" />
        </TouchableOpacity>
      </View>
      <Image source={pathImage} resizeMode="contain" />
      {textButton.length > 0 ?
        < View style={styles.button}>
          <ButtonCommon onPress={handleFeatureToogle} text={textButton} />
        </View>
        :
        <Text style={styles.textFeature}  >{textFeature}</Text>
      }

    </View >
  )
}