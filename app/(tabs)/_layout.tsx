import { Tabs } from 'expo-router';
import { useHrefAttrs } from 'expo-router/build/link/useLinkHooks';
import { Ionicons as Icon } from "@expo/vector-icons";


export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{href: null}}/>
      <Tabs.Screen
        name="individ/home"
        options={{ title: "Individual",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" size={30} color="#000" />
          ),
           headerShown: false }}
      />
      <Tabs.Screen
        name="comm/dash"
        options={{ title: "Community", 
          tabBarIcon: ({ color, size }) => (
            <Icon name="people-outline" size={30} color="#000" />
          ),
          headerShown: false }}
      />
    </Tabs>
  );
}
