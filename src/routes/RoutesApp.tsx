import { RoutesModel } from '@/model/RoutesModel'
import ApresentationScreen from '@/screens/apresentation/ApresentationScreen'
import Feature from '@/screens/feature/FeatureScreen'
import HomeScreen from '@/screens/home/HomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } =
  createNativeStackNavigator<RoutesModel>()

export default function RoutesApp() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name='Apresentation' component={ApresentationScreen} />
      <Screen name='Home' component={HomeScreen} />
      <Screen name='Feature' component={Feature} />
    </Navigator>
  )
}
