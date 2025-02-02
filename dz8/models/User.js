import Realm from 'realm';

const UserSchema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    email: 'string',
  },
};

export default UserSchema;
