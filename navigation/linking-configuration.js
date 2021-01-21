import * as Linking from "expo-linking";

export default {
  // prefixes: [Linking.makeUrl("/tlg")],
  config: {
    screens: {
      Root: {
        screens: {
          TabContacts: {
            screens: {
              TabContactsScreen: "one",
            },
          },
          TabChats: {
            screens: {
              TabChatsScreen: "two",
            },
          },
          TabSettings: {
            screens: {
              TabSettingsScreen: "three",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
