import faker from "faker";

// STRUCTURE
const structure = {
  left: {
    invisible: false,
    icon: "",
    iconBackgroundColor: "rgb(239, 122, 9)",
  },
  title: "title",
  titleType: "",
  right: {
    invisible: false,
    hideChevronRight: false,
    text: "",
    isRoundText: false,
    isSwitch: true,
    switchDefaultValue: true,
    onSwitchChangeValue: () => {},
  },
  footerTitle: ["footerTitle"],
};

export const notificationList = [
  {
    id: faker.random.uuid(),
    title: "MESSAGE NOTIFICATIONS",
    footerTitle: ["Set custom notifications for specific users"],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Show Nofitications",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Message Preview",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Sound",
        right: {
          text: "Note",
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Exceptions",
        right: {
          text: "2 chats",
          hideChevronRight: false,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "GROUP NOTIFICATIONS",
    footerTitle: ["Set custom notifications for specific groups"],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Show Nofitications",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Message Preview",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Sound",
        right: {
          text: "Note",
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Exceptions",
        right: {
          text: "2 chats",
          hideChevronRight: false,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "CHANNEL NOTIFICATIONS",
    footerTitle: ["Set custom notifications for specific channels"],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Show Nofitications",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Message Preview",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Sound",
        right: {
          text: "Note",
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Exceptions",
        right: {
          text: "2 chats",
          hideChevronRight: false,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "IN-APP NOTIFICATIONS",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "In-App Sounds",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "In-App Vibrate",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "In-App Preview",
        right: {
          text: "2 chats",
          hideChevronRight: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    footerTitle: [`Display names in notifications when the device is locked. To disable, make sure that "Show Previews" is also set to "When Unlocked" or "Never" in iOS Settings > Notifications.`],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Names on Lock Screen",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "BADGE COUNTER",
    footerTitle: [`Switch off to show the number of unread chats instead of messages`],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Include Channels",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Count Unread Messages",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "",
    footerTitle: [`Receive push notifications when one of your contacts becomes available on Telegram`],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "New Contacts",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "",
    footerTitle: [`Undo all custom notification settings for all your contacts, groups and channels`],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Reset All Notifitcations",
        titleType: "error",
        right: {
          invisible: true,
        },
      },
    ],
  },
];
