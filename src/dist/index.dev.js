"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _lodash = _interopRequireWildcard(require("lodash"));

require("./style.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-unused-vars */
var doList = [{
  descriptlion: 'Go to the library',
  completed: 'false',
  index: 0
}, {
  descriptlion: 'Do some exercise',
  completed: 'false',
  index: 1
}, {
  descriptlion: 'Go camping',
  completed: 'false',
  index: 3
}];

var createList = function createList(list) {
  var li = document.createElement('li');
  li.innerHTML = "\n    <li clas\"list-items'>\n      <label class=\"list-label\">\n        <input type=\"checkbox\" value=\"".concat(list.completed, "\">\n        <p class=\"list-description\">").concat(list.description, "</p>\n      </label>\n    <i class=\"icon-remove\"></i>\n    </li>\n  ");
  return li;
};

var displayList = function displayList(doList) {
  var listDo = document.querySelector('.todo-list');
  doList.forEach(function (element) {
    var li = createList(element);
    listDo.appendChild(li);
  });
};