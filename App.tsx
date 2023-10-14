import theme from "@/themes/theme"
import { NavigationContainer } from "@react-navigation/native";
import RoutesApp from "@/routes/RoutesApp";


export default function App() {
   return (
      <NavigationContainer>
         <RoutesApp />
      </NavigationContainer>
   )
}