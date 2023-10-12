import { ThemeProvider } from "@emotion/react";
import theme from "@/themes/theme"
import HomeScreen from "@/screens/home/HomeScreen";


export default function App() { 
   return ( 
    <ThemeProvider theme={theme}>
       <HomeScreen />
    </ThemeProvider>
   )
}