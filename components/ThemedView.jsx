import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function ThemedView({ style, safe = false, ...props }) {
  const colorScheme = useColorScheme();
  console.log(colorScheme);

  //fallback theme -> light
  const theme = Colors[colorScheme] ?? Colors.light;
  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );

  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}
