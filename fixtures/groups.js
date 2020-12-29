import _ from "lodash";
import faker from "faker";
import contacts from "./contacts";
import currentUser from "./currentUser";

const byIds = {};

export const GROUP_MEMBER_LENGTH = 4;

const defaultChat = () => ({
  id: faker.random.uuid(),
  image: faker.image.transport(),
  groupName: faker.name.title(),
  members: [],
});

const friends = faker.random.arrayElements(_.reject(contacts.items, ["id", currentUser.id]), 12);
const groupMembers = _.chunk(friends, GROUP_MEMBER_LENGTH - 1).map((list) => [currentUser, ...list]);

const groups = groupMembers.map((grMembers) => {
  return {
    ...defaultChat(),
    members: grMembers.map((member) => member.id),
    groupName: _.join(
      grMembers.map((member) => member.firstName),
      ", ",
    ),
  };
});

groups.forEach((group) => {
  byIds[group.id] = group;
});

export default {
  byIds,
  allIds: Object.keys(byIds),
  items: groups,
};
