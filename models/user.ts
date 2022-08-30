import { DataTypes } from 'sequelize';
import db from '../db/connection';

const User = db.define('user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    state: {
      type: DataTypes.SMALLINT,
      defaultValue: 1
    },
  },
  {
    tableName: 'users',
  }
);


export default User;