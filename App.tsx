import theme from '@/themes/theme'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import RoutesApp from '@/routes/RoutesApp'

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RoutesApp />
      </GestureHandlerRootView>
    </NavigationContainer>
  )
}
