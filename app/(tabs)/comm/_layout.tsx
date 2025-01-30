import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons as Icon } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DashScreen from "./dash";
import LogsScreen from "./logs";
import MembersScreen from "./members";
import RewardsScreen from "./rewards";

// Create Stack Navigator
const Stack = createStackNavigator();

// ✅ Custom Header Component
const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      {/* Left Side - Logo */}
      <View style={styles.logoContainer}>
        {/* <Image source={require("../assets/sortify-logo.png")} style={styles.logo} /> */}
        <TouchableOpacity onPress={() => navigation.navigate("dash")}>
          <Text style={styles.appName}>Sortify</Text>
        </TouchableOpacity>
      </View>

      {/* Center - Navigation Links */}
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => navigation.navigate("logs")}>
          <Text style={styles.navText}>Community</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("members")}>
          <Text style={styles.navText}>Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("rewards")}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side - Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Logout pressed")}>
        <Icon name="log-out-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

// ✅ Main App Navigation
export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => <CustomHeader />, // Use custom header for all screens
      }}
    >
      <Stack.Screen name="dash" component={DashScreen} />
      <Stack.Screen name="logs" component={LogsScreen} />
      <Stack.Screen name="members" component={MembersScreen} />
      <Stack.Screen name="rewards" component={RewardsScreen} />
    </Stack.Navigator>
  );
}

// ✅ Styles for Header
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2C6E49", // Green Theme
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  appName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  navLinks: {
    flexDirection: "row",
    gap: 20,
  },
  navText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#E63946",
    padding: 8,
    borderRadius: 5,
  },
});
