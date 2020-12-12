import faker from "faker";

// STRUCTURE
const structure = {
  left: {
    invisible: false,
    icon: "",
    iconBackgroundColor: "rgb(239, 122, 9)",
  },
  title: "title",
  subtitle: "Photos, Videos (2,5MB)",
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

export const dataAndStorageList = [
  {
    title: "",
    footerTitle: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Storage Usage",
        right: {
          invisible: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Network Usage",
        right: {
          invisible: false,
        },
      },
    ],
  },
  {
    title: "AUTOMATIC MEDIA DOWNLOAD",
    footerTitle: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Using Cellular",
        subtitle: "Photos, Videos (2,5MB)",
        right: {
          invisible: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Using Wi-Fi",
        subtitle: "Photos, Videos (15MB), Files (3,0 MB)",
        right: {
          invisible: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Reset Auto-Download Settings",
        disabled: true,
        right: {
          invisible: true,
        },
      },
    ],
  },
  {
    title: "AUTO-PLAY MEDIA",
    footerTitle: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "GIFs",
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
        title: "Videos",
        right: {
          invisible: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
  {
    title: "CALLS",
    footerTitle: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "GIFs",
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
        title: "Use Less Data",
        right: {
          invisible: false,
          text: "Never",
          hideChevronRight: false,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
  {
    title: "OTHER",
    footerTitle: "The app will continue downloading media files for a limited time.",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Share Sheet",
        right: {
          invisible: false,
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Save Incoming Photos",
        right: {
          invisible: false,
          hideChevronRight: false,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Save Edited Photos",
        right: {
          invisible: false,
          hideChevronRight: true,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Open Links in",
        right: {
          invisible: false,
          hideChevronRight: false,
          text: "In-App Safari",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Background Download",
        right: {
          invisible: false,
          hideChevronRight: true,
          isSwitch: true,
          switchDefaultValue: true,
        },
      },
    ],
  },
  {
    title: "CONNECTION TYPE",
    footerTitle: "",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Proxy",
        right: {
          invisible: false,
          text: "None",
          hideChevronRight: false,
        },
      },
    ],
  },
];
