import { Dimensions } from "react-native";

<<<<<<< HEAD
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
=======
const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");
>>>>>>> origin/main

export { WINDOW_WIDTH, WINDOW_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT };
export const isSmallDevice = WINDOW_WIDTH < 375;
