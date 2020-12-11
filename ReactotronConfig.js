import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "React Native Telegram Clone",
  })
  .useReactNative({
    networking: {
      ignoreUrls: /\/(generate_204|logs|symbolicate)$/,
    },
  })
  .connect();

console.tron = reactotron;

export default reactotron;
