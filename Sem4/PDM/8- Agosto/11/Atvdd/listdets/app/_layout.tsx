import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(136, 0, 0, 1)",
  },
  texto: {
    color: "#fff",
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Lista de Posts" }} />
    <Stack.Screen name="dets" options={{ title: "Detalhes do Lanches" }} />

  </Stack>;
}
