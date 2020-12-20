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
          icon: require("@app/assets/images/main/Images.xcassets/Settings/MenuIcons/SavedMessages.imageset/ic_savedmessages.png"),
        },
        title: "Saved Messages",
        right: {},
      },
      {
        id: faker.random.uuid(),
        title: "Recent Calls",
        left: {
          icon: require("@app/assets/images/main/Images.xcassets/Settings/MenuIcons/RecentCalls.imageset/ic_recentcalls.png"),
        },
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("RecentCallScreen"),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconBackgroundColor: "rgb(250, 130, 7)",
        },
        title: "Devices",
        right: {
          text: "8",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          iconBackgroundColor: "rgb(44, 152, 210)",
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
          iconBackgroundColor: "rgb(251, 30, 34)",
        },
        title: "Notifications and Sounds",
        right: {},
        onPress: ({ navigation }) => navigation && navigation.navigate("NotificationAndSoundScreen"),
      },
      {
        id: faker.random.uuid(),
        left: {
          iconBackgroundColor: "rgb(122, 122, 128)",
        },
        title: "Privacy and Security",
        right: {},
      },
      {
        id: faker.random.uuid(),
        left: {
          icon: require("@app/assets/images/main/Images.xcassets/Settings/MenuIcons/DataAndStorage.imageset/ic_data.png"),
          iconBackgroundColor: "rgb(66, 206, 78)",
        },
        title: "Data and Storage",
        right: {},
      },
      {
        id: faker.random.uuid(),
        title: "Appearance",
        left: {
          icon: "",
          iconBackgroundColor: "rgb(44, 147, 201)",
        },
        right: {},
      },
      {
        id: faker.random.uuid(),
        left: {
          iconBackgroundColor: "rgb(185, 85, 211)",
        },
        right: {
          text: "English",
        },
        title: "Language",
      },
      {
        id: faker.random.uuid(),
        left: {
          iconBackgroundColor: "rgb(185, 85, 211)",
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
          icon: "",
          iconBackgroundColor: "rgb(239, 122, 9)",
        },
        title: "Ask a Question",
        right: {},
      },
      {
        id: faker.random.uuid(),
        left: {
          icon: "",
          iconBackgroundColor: "rgb(44, 147, 201)",
        },
        title: "Telegram FAQ",
        right: {},
      },
    ],
    // footerTitle: ""
  },
];
