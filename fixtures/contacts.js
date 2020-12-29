import _ from "lodash";
import faker from "faker";

const byIds = {};
const STATUS = ["online", "offline"];

const contacts = new Array(100).fill(1).map((i) => {
  const status = STATUS[Math.floor(Math.random() * STATUS.length)];
  const contact = {
    id: faker.random.uuid(),
    avatar: faker.image.avatar(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status,
    lastSeen: faker.date.recent(),
  };
  return contact;
});

contacts.forEach((contact) => {
  byIds[contact.id] = contact;
});
const groupByFirstName = _.groupBy(contacts, (contact) => _.head(contact.firstName));
const groupByContacts = Object.keys(groupByFirstName).map((key) => ({
  title: key,
  data: groupByFirstName[key],
}));

export default {
  byIds,
  allIds: Object.keys(byIds),
  items: contacts,
  groupByContacts: _.sortBy(groupByContacts, (i) => i.title),
};
