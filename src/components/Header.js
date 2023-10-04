import Timer from "./Timer";
import ThemeSwitch from "./ThemeSwitch";
import { HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack justifyContent="space-between" padding="20px" height="10vh">
      <Timer />
      <ThemeSwitch />
    </HStack>
  );
};

export default Header;
