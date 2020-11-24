import _ from 'lodash';
import contacts from './contacts';

const user = contacts.items[_.random(0, 99)];

export default user;
