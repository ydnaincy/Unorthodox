import { Slot } from "expo-router";
import { View, StyleSheet, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <View style={styles.container}>
      {/* Status bar configuration */}
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Slot renders the active route */}
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
