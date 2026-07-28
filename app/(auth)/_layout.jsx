import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";

const RootLayout = () => {
  const colorScheme = useColorScheme();

  const theme = Colors[colorScheme] ?? Colors.light;

  const { user } = useUser();
  console.log(user);

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      />
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
