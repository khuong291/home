"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var styled_components_1 = require("styled-components");
var Colors = require("../constants/colors");
var AboutContainer = function () { return (React.createElement(Container, null,
    React.createElement(Title, null, "About Me"),
    React.createElement(Description, null, "Hi there! I'm a senior frontend developer working on web and mobile applications. I have been developing professionally for 5 years. I have a deep understanding of many technical subjects. and can take down many roles from mobile development or backend to frontend development. Courteous and enthusiastic, I am interested in IT and everything in its orbit."))); };
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  background-color: white;\n  padding: 15px 30px;\n  border-radius: 8px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  background-color: white;\n  padding: 15px 30px;\n  border-radius: 8px;\n"])));
var Title = styled_components_1["default"].h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1.5em;\n  color: ", ";\n  font-weight: bold;\n  text-align: left;\n"], ["\n  font-size: 1.5em;\n  color: ", ";\n  font-weight: bold;\n  text-align: left;\n"])), Colors.textTitle);
var Description = styled_components_1["default"].h2(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 1.2em;\n  color: ", ";\n  text-align: left;\n  font-weight: lighter;\n"], ["\n  font-size: 1.2em;\n  color: ", ";\n  text-align: left;\n  font-weight: lighter;\n"])), Colors.textDescription);
exports["default"] = AboutContainer;
var templateObject_1, templateObject_2, templateObject_3;
