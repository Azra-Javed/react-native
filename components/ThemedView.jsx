import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export default function ThemedView({ style, ...props }) {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  //fallback theme -> light
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
}
