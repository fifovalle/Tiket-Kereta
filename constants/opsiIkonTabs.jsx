import { Ionicons } from "@expo/vector-icons";

export const opsiIkonTabs = (focused, icon, size = 24) => {
  return (
    <Ionicons
      name={focused ? icon : `${icon}-outline`}
      color={focused ? "#03314B" : "#94A3B8"}
      size={size}
    />
  );
};
