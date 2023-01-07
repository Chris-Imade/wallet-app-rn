import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import RootStack from './navigation/RootStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf")
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootStack />
  );
}