import ApresentationScreen from "@/screens/apresentation/ApresentationScreen";
import HomeScreen from "@/screens/home/HomeScreen";
import ConstantsRoutes from "@/utils/ConstantsRoute";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const { Navigator, Screen } = createNativeStackNavigator()



export default function RoutesApp() {
   return (
      <Navigator screenOptions={{
         headerShown: false
      }}>
         <Screen name={ConstantsRoutes.apresentation} component={ApresentationScreen} />
         <Screen name={ConstantsRoutes.home} component={HomeScreen} />
      </Navigator>

   )
}