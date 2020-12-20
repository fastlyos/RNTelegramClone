import faker from "faker";

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
  footerTitle: "footerTitle",
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
          isCustomComponent: true,
        },
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
        right: {
          invisible: true,
        },
      },
    ],
    footerTitle: "Tap 'Edit' to change the order or delete folders.",
  },
];
