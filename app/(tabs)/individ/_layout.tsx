import { Tabs } from "expo-router";
import { Ionicons as Icon } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";




export default function IndividLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="handshake" size={24} color={color} />

          ),
        }}
      />
      <Tabs.Screen
        name="quizzes"
        options={{
          title: "Quizzes",
          tabBarIcon: ({ color, size }) => (
            <Icon name="book" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
