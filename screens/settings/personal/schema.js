import faker from "faker";
import { iOSUIKit, iOSColors } from "react-native-typography";

// STRUCTURE
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
  // footerTitle: "footerTitle",
  disabled: false,
};

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
          isSwitch: true,
          switchDefaultValue: true,
          onSwitchChangeValue: () => {},
        },
        disabled: true,
      },
    ],
    footerTitle: "A call icon will appear in the tab bar",
  },
];

export const chatFolders = [
  {
    title: "FOLDERS",
    data: [
      {
        left: {
          invisible: true,
        },
        title: "Create New Folder",
        titleStyle: {
          color: iOSColors.blue,
        },
        right: {
          invisible: true,
        },
        hasBottomDivider: false,
        disabled: true,
      },
    ],
    footerTitle: "Tap 'Edit' to change the order or delete folders.",
  },
];

export const sessionsInDevices = [
  {
    id: 1,
    title: "CURRENT SESSION",
    data: [
      {
        id: 1,
        left: {
          invisible: true,
        },
        title: "Telegram iOS 7.4",
        subtitle: {
          deviceName: "iphone 12 Pro, iOS, 14.4",
          ipAddress: "111.111.111.111",
          location: "Ho Chi Minh City, Vietnam",
        },
        right: {
          text: "online",
          hideChevronRight: true,
          textStyle: {
            color: "blue",
          },
        },
        disabled: true,
      },
      {
        id: 999,
        left: {
          invisible: true,
        },
        title: "Terminate all other sessions",
        titleStyle: {
          ...iOSUIKit.subhead,
          color: iOSColors.red,
        },
        subtitle: {},
        right: {
          hideChevronRight: true,
        },
        disabled: true,
      },
    ],
    footerTitle: "Logs out all devices except for this one.",
  },
  {
    id: 2,
    title: "ACTIVE SESSIONS",
    data: [
      {
        id: 1,
        left: {
          invisible: true,
        },
        title: "Telegram iOS 7.4",
        subtitle: {
          deviceName: "MacbookPro 17,1, macOS, 11.1",
          ipAddress: "111.111.111.111",
          location: "Ho Chi Minh City, Vietnam",
        },
        right: {
          hideChevronRight: true,
          text: "11:59 AM",
        },
        disabled: true,
      },
      {
        id: 2,
        left: {
          invisible: true,
        },
        title: "Telegram iOS 7.5",
        subtitle: {
          deviceName: "MacbookPro 17,1, macOS, 11.1",
          ipAddress: "2020:2021:2022:2023:2024:2025:2026",
          location: "Ho Chi Minh City, Vietnam",
        },
        right: {
          hideChevronRight: true,
          text: "12/22/20",
        },
        disabled: true,
      },
    ],
    footerTitle: "",
  },
];
