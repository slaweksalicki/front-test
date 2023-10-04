import { Switch, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../reducers/app";

const ThemeSwitch = () => {
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  const dispatch = useDispatch();
  const clickHandle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <VStack>
      <p>{isDarkMode ? "Dark theme" : "Light theme"}</p>
      <Switch colorScheme="teal" size="lg" onChange={clickHandle} />
    </VStack>
  );
};

export default ThemeSwitch;
