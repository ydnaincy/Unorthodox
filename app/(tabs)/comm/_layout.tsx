import { Tabs } from "expo-router";
import { Ionicons as Icon } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";




export default function IndividLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="dash"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="tachometer-alt" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: "Community",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="logs"
        options={{
          title: "Quizzes",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="clipboard-list" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="rewards"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
