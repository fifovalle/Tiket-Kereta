import { Tabs } from "expo-router";
import { opsiIkonTabs } from "@/constants/opsiIkonTabs";

export default function TataLetakTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 30,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => opsiIkonTabs(focused, "home"),
          tabBarLabel: "Beranda",
          tabBarLabelStyle: { color: "#03314B" },
        }}
      />

      <Tabs.Screen
        name="jelajahi"
        options={{
          tabBarIcon: ({ focused }) => opsiIkonTabs(focused, "search"),
          tabBarLabel: "Jelajahi",
          tabBarLabelStyle: { color: "#03314B" },
        }}
      />

      <Tabs.Screen
        name="tiket"
        options={{
          tabBarIcon: ({ focused }) => opsiIkonTabs(focused, "ticket"),
          tabBarLabel: "Tiket Saya",
          tabBarLabelStyle: { color: "#03314B" },
        }}
      />

      <Tabs.Screen
        name="profil"
        options={{
          tabBarIcon: ({ focused }) => opsiIkonTabs(focused, "person"),
          tabBarLabel: "Profil",
          tabBarLabelStyle: { color: "#03314B" },
        }}
      />
    </Tabs>
  );
}
