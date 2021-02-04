import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useAssets } from "expo-asset";
import { Ionicons, AntDesign, MaterialCommunityIcons, MaterialIcons, Entypo, Feather, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { PNG_ICON_SOURCES, SVG_ICON_SOURCES } from "@app/components/icons/icons-path";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [assets, error] = useAssets([...Object.values(PNG_ICON_SOURCES)]);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          ...AntDesign.font,
          ...MaterialCommunityIcons.font,
          ...MaterialIcons.font,
          ...Entypo.font,
          ...Feather.font,
          ...FontAwesome.font,
          ...SimpleLineIcons.font,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
