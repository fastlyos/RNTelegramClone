import _ from "lodash";
import faker from "faker";

const byIds = {};
const STATUS = ["online", "offline"];

const contacts = new Array(100).fill(1).map((i) => {
  const status = STATUS[Math.floor(Math.random() * STATUS.length)];
  const nameData = { firstName: faker.name.firstName(), lastName: faker.name.lastName() };
  const color = faker.random.hexaDecimal(6);
  const avatar = `https://ui-avatars.com/api/?name=${nameData.firstName}+${nameData.lastName}&background=${color.substring(2, 8)}`;
  const contact = {
    id: faker.random.uuid(),
    ...nameData,
    avatar,
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
