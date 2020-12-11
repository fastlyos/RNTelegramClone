import _ from "lodash";
import faker from "faker";
import chats from "./chats";
import contacts from "./contacts";
import groups, { GROUP_MEMBER_LENGTH } from "./groups";
import currentUser from "./currentUser";
const byIds = {};

function defaultMessage() {
  return {
    id: faker.random.uuid(),
    body: faker.lorem.sentences(1 + faker.random.number(2)),
    chatId: faker.random.uuid(),
    isEdit: false,
    createdAt: faker.date.recent().toISOString(),
    createBy: contacts.items[_.random(0, contacts.items - 1)].id,
  };
}

// direct chat
const directChats = chats.items.filter((item) => item.type === "direct");
const directMessages = _.flatten(
  directChats.map((chat) => {
    return new Array(20).fill(1).map((i) => ({
      ...defaultMessage(),
      chatId: chat.id,
      createBy: faker.random.arrayElement([chat.objectId, currentUser.id]),
    }));
  }),
);

// group
const groupChats = chats.items.filter((item) => item.type === "group");
const groupMessages = _.flatten(
  groupChats.map((chat) => {
    return new Array(20).fill(1).map((i) => ({
      ...defaultMessage(),
      chatId: chat.id,
      createBy: groups.byIds[chat.objectId].members[_.random(0, GROUP_MEMBER_LENGTH - 1)],
    }));
  }),
);

const messages = groupMessages.concat(directMessages);
messages.forEach((chat) => (byIds[chat.id] = chat));

const lastMessages = chats.items.map((chat) => {
  const chatMessages = messages.filter((message) => message.chatId === chat.id);
  const lastMessage = _.maxBy(chatMessages, (mess) => mess.createdAt);
  return {
    chatId: chat.id,
    lastMessage,
  };
});
const lastMessageByIds = {};
lastMessages.forEach((i) => (lastMessageByIds[i.chatId] = i.lastMessage));

export default {
  byIds: byIds,
  allIds: Object.keys(byIds),
  items: messages,
  lastMessages,
  lastMessageByIds,
};
