#!/usr/bin/env node
// Copied from: https://github.com/woubuc/sweep/blob/master/npm/run.js

const getBinary = require("./getBinary");

const binary = getBinary();
binary.run();
