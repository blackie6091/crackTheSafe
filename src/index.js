const { loadRichie } = require("./richie");
const { loadJoel } = require("./joel");
const { loadJoe } = require("./joe");
const { loadFrank } = require("./frank");
const { load404 } = require("./404");

var search = location.search.substring(1) || "?user=";
const result = JSON.parse(
  '{"' +
    decodeURI(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"') +
    '"}'
);
switch (result.user) {
  case "richie":
    loadRichie();
    break;
  case "joe":
    loadJoe();
    break;
  case "joel":
    loadJoel();
    break;
  case "frank":
    loadFrank();
    break;
  default:
    load404();
}
