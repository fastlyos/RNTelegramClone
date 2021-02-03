import _ from "lodash";
import faker from "faker";
import contacts from "./contacts";
import currentUser from "./currentUser";

const byIds = {};

export const GROUP_MEMBER_LENGTH = 4;

const defaultChat = () => {
  const groupName = faker.name.title();
  const image = `https://ui-avatars.com/api/?name=${groupName}&background=${faker.random.hexaDecimal(6).substring(2, 8)}`;
  return {
    id: faker.random.uuid(),
    image,
    groupName,
    members: [],
  };
};

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
