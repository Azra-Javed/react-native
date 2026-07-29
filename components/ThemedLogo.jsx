import { Image, useColorScheme } from "react-native";

// images
import DarkLogo from "../assets/images/dark.png";
import LightLogo from "../assets/images/light.png";

const ThemedLogo = ({ ...props }) => {
  const colorScheme = useColorScheme();

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
};

export default ThemedLogo;
