"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var styled_components_1 = require("styled-components");
var Colors = require("../constants/colors");
var LinkButton_1 = require("./LinkButton");
var HeaderContainer = function () { return (React.createElement(Container, null,
    React.createElement(Avatar, { src: "https://avatars2.githubusercontent.com/u/11523438?s=460&v=4" }),
    React.createElement(InfoBox, null,
        React.createElement(NameLabel, null, "Kenny Pham"),
        React.createElement(JobLabel, null, "Senior Software Engineer"),
        React.createElement("div", { style: { display: "flex", flexDirection: "row" } },
            React.createElement(LinkButton_1["default"], { link: "https://github.com/khuong291", imageName: "fab fa-github" }),
            React.createElement(LinkButton_1["default"], { link: "https://medium.com/@dkhuong291", imageName: "fab fa-medium" }),
            React.createElement(LinkButton_1["default"], { link: "https://stackoverflow.com/users/4742830/khuong", imageName: "fab fa-stack-overflow" }),
            React.createElement(LinkButton_1["default"], { link: "https://www.linkedin.com/in/khuong-pham-kenny-7b1635108", imageName: "fab fa-linkedin" }))))); };
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (max-width: 768px) {\n    height: auto;\n  }\n\n  height: 200px;\n  display: flex;\n  justify-content: left;\n  padding: 20px 0 20px 0;\n  background-color: white;\n"], ["\n  @media (max-width: 768px) {\n    height: auto;\n  }\n\n  height: 200px;\n  display: flex;\n  justify-content: left;\n  padding: 20px 0 20px 0;\n  background-color: white;\n"])));
var Avatar = styled_components_1["default"].img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (max-width: 768px) {\n    width: 80px;\n    height: 80px;\n    margin-left: 20px;\n  }\n\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  margin-left: 60px;\n"], ["\n  @media (max-width: 768px) {\n    width: 80px;\n    height: 80px;\n    margin-left: 20px;\n  }\n\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  margin-left: 60px;\n"])));
var InfoBox = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  margin: 0 0 0 30px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  margin: 0 0 0 30px;\n"])));
var NameLabel = styled_components_1["default"].h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  @media (max-width: 768px) {\n    font-size: 17px;\n  }\n\n  font-size: 40px;\n  color: ", ";\n  font-weight: bold;\n  text-align: left;\n"], ["\n  @media (max-width: 768px) {\n    font-size: 17px;\n  }\n\n  font-size: 40px;\n  color: ", ";\n  font-weight: bold;\n  text-align: left;\n"])), Colors.darkGray);
var JobLabel = styled_components_1["default"].h2(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  @media (max-width: 768px) {\n    font-size: 12px;\n    margin: 2px 0 0 0;\n  }\n\n  font-size: 20px;\n  color: ", ";\n  text-align: left;\n  margin: -10px 0 0 0;\n"], ["\n  @media (max-width: 768px) {\n    font-size: 12px;\n    margin: 2px 0 0 0;\n  }\n\n  font-size: 20px;\n  color: ", ";\n  text-align: left;\n  margin: -10px 0 0 0;\n"])), Colors.midGray);
exports["default"] = HeaderContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
