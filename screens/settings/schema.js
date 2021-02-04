import faker from "faker";

export const languageList = [
  {
    id: faker.random.uuid(),
    title: "English",
    subTitle: "English",
  },
  {
    id: faker.random.uuid(),
    title: "Uzbek",
    subTitle: "O'zbek",
  },
];

export const settingList = [
  {
    title: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          iconName: "SavedMessages",
          type: "png",
        },
        title: "Saved Messages",
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("SavedMessagesScreen"),
      },
      {
        id: faker.random.uuid(),
        title: "Recent Calls",
        left: {
          iconName: "RecentCalls",
          type: "png",
        },
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("RecentCallScreen"),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "sessions",
          type: "svg",
        },
        title: "Devices",
        right: {
          text: "8",
        },
        onPress: ({ navigation }) => navigation && navigation.navigate("ListDevicesScreen"),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "chat_folders",
          type: "svg",
        },
        title: "Chat Folders",
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("FoldersScreen"),
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          iconName: "Notifications",
          type: "png",
        },
        title: "Notifications and Sounds",
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("NotificationAndSoundScreen"),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "Security",
          type: "png",
        },
        title: "Privacy and Security",
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("PrivacyAndSecurityScreen"),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "DataAndStorage",
          type: "png",
        },
        title: "Data and Storage",
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("MainDataStorageScreen"),
      },
      {
        id: faker.random.uuid(),
        title: "Appearance",
        left: {
          iconName: "Appearance",
          type: "png",
        },
        right: {},
      },
      {
        id: faker.random.uuid(),
        left: {
          iconBackgroundColor: "rgb(185, 85, 211)",
          iconName: "Language",
          type: "png",
        },
        right: {
          text: "English",
        },
        title: "Language",
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "Stickers",
          type: "png",
        },
        title: "Stickers",
        right: {
          text: "12",
          isRoundText: true,
        },
      },
    ],
  },
  {
    title: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          iconName: "Support",
          type: "png",
        },
        title: "Ask a Question",
        right: {},
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "Faq",
          type: "png",
        },
        title: "Telegram FAQ",
        right: {},
      },
    ],
    // footerTitle: ""
  },
];
