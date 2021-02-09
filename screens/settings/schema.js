import faker from "faker";
import { iOSColors } from "react-native-typography";

export const languageList = [
  {
    title: "",
    data: [
      {
        id: faker.random.uuid(),
        title: "English",
        subtitle: "English",
        subtitleStyle: {
          color: iOSColors.black,
        },
        onPress: () => {},
        right: {
          invisible: false,
          isSelect: true,
          hideChevronRight: true,
          defaultSelectValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        title: "Uzbek",
        subtitle: "O'zbek",
        subtitleStyle: {
          color: iOSColors.black,
        },
        onPress: () => {},
        right: {
          invisible: false,
          hideChevronRight: true,
          isSelect: true,
          defaultSelectValue: false,
        },
      },
    ],
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
        onPress: ({ navigation }) => navigation && navigation.navigate("ChatFoldersScreen"),
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
        onPress: ({ navigation }) => navigation && navigation.navigate("MainAppearanceScreen"),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "Language",
          type: "png",
        },
        right: {
          text: "English",
        },
        onPress: ({ navigation }) => navigation && navigation.navigate("LanguageScreen"),
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
        onPress: ({ navigation }) => navigation && navigation.navigate("ListStickersScreen"),
      },
    ],
  },
  {
    title: "",
    data: [
      {
        id: "Ask-a-Question",
        left: {
          iconName: "Support",
          type: "png",
        },
        title: "Ask a Question",
        right: {},
        onPress: ({ callback }) => callback && callback(),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "Faq",
          type: "png",
        },
        title: "Telegram FAQ",
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("FAQScreen"),
      },
    ],
    // footerTitle: ""
  },
];
