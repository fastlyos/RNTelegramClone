import { Dimensions } from "react-native";

const SCREENS = Dimensions.get("screen");

export const SCREEN_WIDTH = SCREENS.width;
export const SCREEN_HEIGHT = SCREENS.height;

export const CONTENT = [
  {
    id: 1,
    title: "Telegram",
    content: ["The world's <bold>fastest</bold> messaging app.", "It is <bold>free</bold> and <bold>secure</bold>."],
  },
  {
    id: 2,
    title: "Fast",
    content: ["<bold>Telegram</bold> delivers messages", "faster than any other application."],
  },
  {
    id: 3,
    title: "Free",
    content: ["<bold>Telegram</bold> is free forever. No ads.", "No subscription fees."],
  },
  {
    id: 4,
    title: "Powerful",
    content: ["<bold>Telegram</bold> has no limits on", "the size of your chats and media."],
  },
  {
    id: 5,
    title: "Secure",
    content: ["<bold>Telegram</bold> keeps your messages", "safe from hacker attacks."],
  },
  {
    id: 6,
    title: "Cloud-Based",
    content: ["<bold>Telegram</bold> lets your access your", "messages from multiple devices."],
  },
];

export const TOP_CONFIG = {
  IMAGE_SIZE: 180,
  IMAGE_PLANE: {
    width: 164 * 0.65,
    height: 148 * 0.65,
  },
  IMAGE_FAST_ARROW: {
    width: 164 * 0.6,
    height: 44 * 0.6,
  },
  FAST_SPIRAL: {
    width: 236 * 0.5,
    height: 236 * 0.5,
  },
  STAR_OFFSET_LEFT: -80,
  STAR_OFFSET_LEFT_LIMIT: 80,
  STAR_OFFSET_TOP: 20,
  STAR_OFFSET_TOP_LIMIT: 120,
};
