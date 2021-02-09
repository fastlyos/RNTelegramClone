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
