import faker from "faker";

// STRUCTURE
const structure = {
  left: {
    invisible: false,
    icon: "",
    type: "svg",
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
    title: "",
    footerTitle: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          iconName: "blocked",
          type: "svg",
        },
        title: "Blocked Users",
        right: {
          text: "3",
          isRoundText: false,
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "touchid",
          type: "svg",
        },
        title: "Passcode & Touch ID",
        right: {
          text: "Off",
          isRoundText: false,
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          iconName: "TwoStep",
          type: "svg",
        },
        title: "Two-Step Verification",
        right: {
          text: "Off",
          isRoundText: false,
          hideChevronRight: false,
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "PRIVACY",
    footerTitle: "Change who can add you to groups and channels",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Phone Number",
        right: {
          text: "My Contacts",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Last Seen & Online",
        right: {
          text: "Everybody",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Profile Photo",
        right: {
          text: "My Contacts",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Calls",
        right: {
          text: "My Contacts",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Forwarded Messages",
        right: {
          text: "Everybody",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Groups & Channels",
        right: {
          text: "My Contacts",
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "AUTOMATICALLY DELETE MY ACCOUNT",
    footerTitle:
      "If you do not come online at least once within this period, your account will be deleted along with all messages and contacts.",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "If Away For",
        right: {
          text: "6 months",
        },
      },
    ],
  },
  {
    id: faker.random.uuid(),
    title: "",
    footerTitle: "Control which of your data is stored in the cloud and used by Telegram to enable advanced features.",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Data Settings",
        right: {
          invisible: false,
        },
      },
    ],
  },
];
