import { StatusBar, View } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Text, GluestackUIProvider } from "@gluestack-ui/themed";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  return (
    <GluestackUIProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#202024",
        }}
      >
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? (
          <Text color="white">Home</Text>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </GluestackUIProvider>
  );
}
