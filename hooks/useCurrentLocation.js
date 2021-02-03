import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useRequestClose = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return null;
      }
      const _location = await Location.getCurrentPositionAsync({});
      setLocation(_location);
    })();
  }, []);
  return [location, errorMsg];
};
export default useRequestClose;
