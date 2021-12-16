const { loadTestCaseA } = require("./testCaseA");
const { loadTestCaseB } = require("./testCaseB");
const { loadTestCaseC } = require("./testCaseC");
const { loadTestCaseD } = require("./testCaseD");
const { load404 } = require("./404");

var search = location.search.substring(1) || "?case=";
const result = JSON.parse(
  '{"' +
    decodeURI(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
);
switch (result.case) {
  case "a":
    loadTestCaseA();
    break;
  case "b":
    loadTestCaseB();
    break;
  case "c":
    loadTestCaseC();
    break;
  case "d":
    loadTestCaseD();
    break;
  default:
    load404();
}
