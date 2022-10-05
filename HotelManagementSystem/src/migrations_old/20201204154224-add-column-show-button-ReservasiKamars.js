const tableName = 'ReservasiKamars'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(tableName, 'buttonExtend', {
        type: Sequelize.BOOLEAN,
      }),
      queryInterface.addColumn(tableName, 'MasterStatusCheckKamarId', {
        type: Sequelize.UUID,
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn(tableName, 'buttonExtend'),
      queryInterface.removeColumn(tableName, 'MasterStatusCheckKamarId'),
    ])
  },
}
