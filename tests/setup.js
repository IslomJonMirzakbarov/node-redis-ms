require("../models/User");

jest.setTimeout(30000);

const { default: mongoose } = require("mongoose");
const keys = require("../config/keys");

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
