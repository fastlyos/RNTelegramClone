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

export const stickerList = [
  {
    title: "",
    footerTitle: "Animated stickers will play continuously in chats",
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Suggest by Emoji",
        right: {
          invisible: false,
          hideChevronRight: false,
          text: "All sets",
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Tending Stickers",
        right: {
          invisible: false,
          text: "24",
          isRoundText: true,
        },
      },
      {
        id: faker.random.uuid(),
        left: {
          invisible: true,
        },
        title: "Masks",
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
        title: "Loop Animated Stickers",
        right: {
          invisible: false,
          hideChevronRight: false,
          isSwitch: true,
          switchDefaultValue: true,
          onSwitchChangeValue: () => {},
        },
      },
    ],
  },
  {
    title: "STICKER SETS",
    footerTitle: [
      "Aritsts are welcome to add their own sticker sets using our @tickers bot.",
      "Tap on a sitkcer to view and add the whole set.",
    ],
    data: [
      {
        id: faker.random.uuid(),
        left: {
          invisible: false,
          icon: "",
          iconBackgroundColor: "rgb(239, 122, 9)",
        },
        title: "Belfort",
        subtitle: "30 stickers",
        titleType: "",
        right: {
          invisible: true,
        },
      },
    ],
  },
];
