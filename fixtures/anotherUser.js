import _ from "lodash";
import contacts from "./contacts";
import currentUser from "./currentUser";

const contactsWithoutCurrentUser = contacts.items.filter((i) => i.id !== currentUser.id);
const user = contactsWithoutCurrentUser[_.random(0, 99)];
export default user;
