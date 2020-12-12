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

export const privacyList = [
  {
    id: faker.random.uuid(),
    title: "COLOR THEME",
    footerTitle: "",
    data: [],
  },
  {
    id: faker.random.uuid(),
    title: "",
    footerTitle: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Chat Background",
        right: {
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Auto-Night Mode",
        right: {
          text: "System",
          isRoundText: false,
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Text Size",
        right: {
          text: "System",
          isRoundText: false,
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Message Corners",
        right: {
          text: "",
          isRoundText: false,
          hideChevronRight: false,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "APP ICON",
    footerTitle: "",
    data: [],
  },
  {
    id: faker.random.uuid(),
    title: "OTHER",
    footerTitle: "Disable animations in message bubbles and in the chat list",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Large Emoji",
        right: {
          hideChevronRight: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Reduce Motion",
        right: {
          hideChevronRight: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
];
