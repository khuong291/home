"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var styled_components_1 = require("styled-components");
var Colors = require("../constants/colors");
var CompanyProjectsContainer = function () { return (React.createElement(Container, null,
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "singaporegp.png" }),
        React.createElement(Title, { href: "https://apps.apple.com/sg/app/singapore-gp/id518276170" }, "SingaporeGP (Swift)")),
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "mbccs.png" }),
        React.createElement(Title, { href: "https://apps.apple.com/us/app/marina-bay-cruise-centre/id1457518741" }, "Marina Bay Cruise Center Singapore (Swift)")),
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "99sme.jpg" }),
        React.createElement(Title, { href: "https://99smeb2b.com" }, "99SME B2B (ReactJS + Python Flask)")),
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "sourcesage.jpg" }),
        React.createElement(Title, { href: "https://dashboard.sourcesage.co" }, "SourceSage (ReactJS + Python Flask)")),
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "360live.png" }),
        React.createElement(Title, { href: "https://apps.apple.com/vn/app/360live/id1191737321?mt=8" }, "360Live (Swift)")),
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "ryde.png" }),
        React.createElement(Title, { href: "https://apps.apple.com/sg/app/ryde-ride-hailing/id979806982" }, "Ryde Sharing (ObjectiveC)")),
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "sistic.jpg" }),
        React.createElement(Title, { href: "https://apps.apple.com/us/app/sistic/id500601166" }, "Sistic (ObjectiveC)")),
    React.createElement(ProjectDiv, null,
        React.createElement("img", { height: "42", src: "odibly.png" }),
        React.createElement(Title, { href: "https://www.linkedin.com/company/odibly/about/" }, "Odibly (Swift)")))); };
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  background-color: white;\n  padding: 15px 30px;\n  border-radius: 8px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: left;\n  background-color: white;\n  padding: 15px 30px;\n  border-radius: 8px;\n"])));
var Title = styled_components_1["default"].a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  @media (max-width: 425px) {\n    font-size: 10px;\n    margin-top: 15px;\n  }\n\n  font-size: 20px;\n  color: ", ";\n  font-weight: bold;\n  text-align: left;\n  margin-left: 10px;\n"], ["\n  @media (max-width: 425px) {\n    font-size: 10px;\n    margin-top: 15px;\n  }\n\n  font-size: 20px;\n  color: ", ";\n  font-weight: bold;\n  text-align: left;\n  margin-left: 10px;\n"])), Colors.textTitle);
var ProjectDiv = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n"])));
exports["default"] = CompanyProjectsContainer;
var templateObject_1, templateObject_2, templateObject_3;
