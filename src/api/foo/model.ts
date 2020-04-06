import Sequelize from 'sequelize'
import db from '../../config/db'

const Foo = db.define('foo', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    field: 'updated_at',
    type: Sequelize.DATE,
  },
}, {
  freezeTableName: true,
})

export default Foo
