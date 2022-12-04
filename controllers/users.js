const mongoClient = require("./mongoConnect");

const userDb = {
  getUsers: async () => {
    const client = await mongoClient.connect();
    const user = client.db("kdt4").collection("user");

    const allUsersCursor = user.find();
    const foundUsers = await allUsersCursor.toArray();
    return foundUsers;
  },
};

module.exports = userDb;
