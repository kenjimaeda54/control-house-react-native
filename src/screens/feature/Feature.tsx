import { TypeFeature } from "@/view_models/HomeViewModel";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "react-native";

interface IRouteParams {
  feature: TypeFeature
}

export default function Feature() {
  const { params } = useRoute()
  const route = params as IRouteParams
  console.log(route)
  return (
    <Text>Ola</Text>
  )
}