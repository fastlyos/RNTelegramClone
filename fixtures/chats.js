import _ from "lodash";
import faker from "faker";
import contacts from "./contacts";
import currentUser from "./currentUser";
import groups from "./groups";

const byIds = {};

const CHAT_TYPES = ["group", "direct", "other"];

const defaultChat = () => ({
  id: faker.random.uuid(),
  image: faker.image.avatar(),
  chatName: faker.name.title(),
  type: "other",
  objectId: faker.random.uuid(),
  isMute: faker.random.boolean(),
  unreadCount: faker.random.number(),
});

// direct
const friends = faker.random.arrayElements(_.reject(contacts.items, ["id", currentUser.id]), 12);
const directChats = friends.map((friend) => ({
  ...defaultChat(),
  chatName: `${friend.firstName} ${friend.lastName}`,
  image: friend.avatar,
  type: "direct",
  objectId: friend.id,
}));

// groups
const groupChats = groups.items.map((group) => ({
  ...defaultChat(),
  chatName: group.groupName,
  image: group.image,
  type: "group",
  objectId: group.id,
}));

const chats = groupChats.concat(directChats);

chats.forEach((chat) => {
  byIds[chat.id] = chat;
});

export default {
  byIds,
  allIds: Object.keys(byIds),
  items: chats,
};
