const sequelize = require("../db");
const { Transaction, Users } = sequelize;

const createTransaction = async (state, cart, country, city, address) => {
  return await Transaction.create({
    cart,
    state,
    country,
    city,
    address,
  });
};

const updateTransaction = async (state, transactionId) => {
  return await Transaction.update(
    {
      state,
    },
    { where: { id: transactionId } }
  );
};

const getUserTransactionsComplete = async (userId) => {
  let user = await Users.findOne({
    where: { id: userId },
    include: [{ model: Transaction, where: { state: "complete" } }],
  });
  return user ? user.Transactions : [];
};

const tokenBuy = async (token, transactionId) => {
  return await Transaction.update({ token }, { where: { id: transactionId } });
};

module.exports = {
  createTransaction,
  updateTransaction,
  getUserTransactionsComplete,
  tokenBuy,
};
