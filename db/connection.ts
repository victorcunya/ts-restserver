import { Sequelize } from 'sequelize';

const db = new Sequelize('postgres://saleor:saleor@localhost/node');

export default db;
