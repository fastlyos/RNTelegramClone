import faker from "faker";

export const settingList = [
  {
    title: "Group 1",
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
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "Group 2",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          iconBackgroundColor: "rgb(251, 30, 34)",
        },
        title: "Notifications and Sounds",
        right: {},
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
    title: "Group 3",
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

export const recentCalls = [
  {
    title: "Group 3",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Show Calls Tab",
        right: {
          hideChevronRight: true,
          isCustomComponent: true,
        },
      },
    ],
    footerTitle: "",
  },
];

//
const structure = {
  left: {
    invisible: false,
    icon: "",
    iconBackgroundColor: "rgb(239, 122, 9)",
  },
  title: "title",
  right: {
    invisible: false,
    hideChevronRight: false,
    text: "",
    isRoundText: true,
  },
};
