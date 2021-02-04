import * as Linking from "expo-linking";

export default {
<<<<<<< HEAD
  prefixes: [Linking.makeUrl("/tlg")],
=======
  // prefixes: [Linking.makeUrl("/tlg")],
>>>>>>> origin/main
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
