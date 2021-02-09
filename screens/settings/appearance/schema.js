import faker from "faker";

import currentUser from "@app/fixtures/currentUser";
import anotherUser from "@app/fixtures/anotherUser";

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

export const appearanceList = [
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

export const sampleMessages = [
  {
    id: faker.random.uuid(),
    body: "Do you know what time is it?",
    chatId: faker.random.uuid(),
    isEdit: false,
    createdAt: faker.date.recent().toISOString(),
    createBy: anotherUser.id,
  },
  {
    id: faker.random.uuid(),
    body: "It's morning in Tokyo 😅",
    chatId: faker.random.uuid(),
    isEdit: false,
    createdAt: faker.date.recent().toISOString(),
    createBy: currentUser.id,
  },
];

export const themeBubbles = [
  {
    id: faker.random.uuid(),
    type: "classic",
  },
  {
    id: faker.random.uuid(),
    type: "day",
  },
  {
    id: faker.random.uuid(),
    type: "night",
  },
  {
    id: faker.random.uuid(),
    type: "tintedNight",
  },
  {
    id: faker.random.uuid(),
    type: "ultraBlue",
  },
];
export const appIcons = [
  {
    id: faker.random.uuid(),
    type: "default",
    title: "Default",
    imageName: "IconDefault",
  },
  {
    id: faker.random.uuid(),
    type: "defaultX",
    title: "Default X",
    imageName: "BlackClassicIcon",
  },
  {
    id: faker.random.uuid(),
    type: "classic",
    title: "Classic",
    imageName: "BlueClassicIcon",
  },
  {
    id: faker.random.uuid(),
    type: "classicX",
    title: "Classic X",
    imageName: "BlackClassicIconIpad",
  },
  {
    id: faker.random.uuid(),
    type: "filled",
    title: "Filled",
    imageName: "BlueFilledIconIpad",
  },
  {
    id: faker.random.uuid(),
    type: "filled",
    title: "Filled X",
    imageName: "BlackFilledIcon",
  },
];
