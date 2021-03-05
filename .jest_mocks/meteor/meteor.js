/* eslint-disable no-console */
const { Mongo } = require("./mongo");

const Meteor = {
  isServer: true,
  loginWithPassword: jest.fn(),
  loginWithFacebook: jest.fn(),
  methods: jest.fn(),
  defer: jest.fn(),
  call: jest.fn(),
  callPromise: jest.fn(),
  publish: jest.fn(),
  subscribe: jest.fn(),
  setInterval: jest.fn(),
  user: jest.fn().mockImplementation(
    () => global.StorybookMocks.user ?? { name: "default" } // THIS IS IMPORTANT
  ),
  users: new Mongo.Collection(),
  userId: jest.fn().mockReturnValue("fakeUserId"),
  startup: jest.fn((init) => init),
  bindEnvironment: jest.fn(),
  wrapAsync: jest.fn((f) => {
    return f;
  }),
  Error: jest.fn(Error),
  settings: {},
  isDevelopment: true,
};

module.exports = { Meteor };
