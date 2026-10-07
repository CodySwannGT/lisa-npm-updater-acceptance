"use strict";

const assert = require("node:assert/strict");
const isNumber = require("is-number");

for (const value of [0, 2.5, -4, "2", "2.5", "-4", "1e3"]) {
  assert.equal(isNumber(value), true);
}
for (const value of ["", " ", NaN, Infinity, null, [], true, undefined]) {
  assert.equal(isNumber(value), false);
}

console.log(`Native dependency behavior passed with is-number ${require("is-number/package.json").version}.`);
