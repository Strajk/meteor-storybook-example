/* eslint-disable no-console */
const Collection = jest.fn().mockImplementation(function (name) {
  if (typeof name === "string") this.__nameUsedJustForMocking = name;
  return this;
});

Collection.prototype.allow = jest.fn();
Collection.prototype.deny = jest.fn();
Collection.prototype.attachSchema = jest.fn();
Collection.prototype.insert = jest.fn();
Collection.prototype.update = jest.fn();
Collection.prototype.remove = jest.fn();
// eslint-disable-next-line no-unused-vars
Collection.prototype.findOne = jest
  .fn()
  .mockImplementation(function (query, projection) {
    let name = this.__nameUsedJustForMocking;

    // "hack" for Meteor.users.find(One) – called from getEffectiveUser()
    // as users collection is initialized internally by Meteor,
    // the mocked implementation of Collection constructor defined at the top of this file is not run.
    // Ugly, but working, fix to determine users collection is to check query param
    if (!name && ["fakeViewedUserId", "fakeUserId"].includes(query))
      name = "users";

    let maybeRes = global.StorybookMocks?.collection?.[name];
    if (typeof maybeRes === "function") maybeRes = maybeRes(query);
    if (maybeRes) return maybeRes[0]; // findOne returns just first

    const msg = `No mock for '${name}'`;
    console.error(msg);
    return { msg };
  });
Collection.prototype.find = jest.fn(function (args) {
  const name = this.__nameUsedJustForMocking;
  let maybeRes = global.StorybookMocks?.collection?.[name];
  if (typeof maybeRes === "function") maybeRes = maybeRes(args);
  return {
    count: jest.fn(),
    fetch: jest.fn(() => maybeRes ?? []),
  };
});
Collection.prototype.helpers = jest.fn();
Collection.prototype.before = {
  insert: jest.fn(),
  update: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  remove: jest.fn(),
  upsert: jest.fn(),
};
Collection.prototype.after = {
  insert: jest.fn(),
  update: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  remove: jest.fn(),
  upsert: jest.fn(),
};
Collection.prototype._ensureIndex = jest.fn();
Collection.prototype.rawCollection = jest.fn().mockImplementation(() => {
  return {
    distinct: jest.fn(),
    mapReduce: jest.fn(),
    indexInformation: jest.fn(),
    createIndexes: jest.fn(),
    findOne: jest.fn(),
  };
});
Collection.prototype.rawDatabase = jest.fn().mockImplementation(() => {
  return {
    collection: Collection.prototype.rawCollection,
  };
});
const Mongo = { Collection };

const RemoteCollectionDriver = jest.fn();
RemoteCollectionDriver.prototype.open = jest.fn().mockReturnThis();
RemoteCollectionDriver.prototype.insert = jest.fn();
RemoteCollectionDriver.prototype.update = jest.fn();
RemoteCollectionDriver.prototype.remove = jest.fn();
RemoteCollectionDriver.prototype.findOne = jest.fn();
RemoteCollectionDriver.prototype.find = jest.fn(() => ({
  count: jest.fn(),
  fetch: jest.fn(),
}));
RemoteCollectionDriver.prototype._ensureIndex = jest.fn();
const MongoInternals = { RemoteCollectionDriver };

module.exports = {
  Mongo,
  MongoInternals,
};
