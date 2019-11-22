"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _litElement = require("lit-element");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <input type=\"checkbox\" class=\"form__checkbox\" .checked=\"", "\" @onC/>\n        <label class=\"form__label\"/>\n        <slot></slot>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var style = "/* Primary colors\n--------------------------------*/\n/* Gray shades\n--------------------------------*/\n/* Secondary colors\n--------------------------------*/\n/* Secondary shades\n--------------------------------*/\n/* Semantic mappings\n--------------------------------*/\n/* 3rd-party branding colors\n--------------------------------*/\n/* Contents colors\n--------------------------------*/\n.form__checkbox {\n  display: none; }\n\n.form__checkbox + .form__label::before,\n.form__checkbox + .form__paragraph::before {\n  content: \"\";\n  color: #fff;\n  display: inline-block;\n  background: #42abc8;\n  border: 1px solid #acacac;\n  box-shadow: inset 0 0 0 8px #fff;\n  transition: box-shadow 0.2s;\n  height: 1em;\n  width: 1em;\n  font-size: 16px;\n  line-height: 1em;\n  margin-right: 4px;\n  vertical-align: middle;\n  transform: translateY(-0.06em);\n  border-radius: 2px; }\n\n.form__checkbox:checked + .form__label::before,\n.form__checkbox:checked + .form__paragraph::before {\n  content: \"\";\n  box-shadow: none;\n  border-color: #42abc8;\n  width: 1em;\n  height: 1em;\n  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTI0LjQxNyAxMC4wODNjLS4xNzUtLjE3NS0uNDI1LS4yNzUtLjY4Ni0uMjc1cy0uNTExLjEwMS0uNjg3LjI3NmwtOS42OTggOS43NTktNC4zOTEtNC4zOTFjLS4xODQtLjE4My0uNDI4LS4yODMtLjY4Ny0uMjgzcy0uNTAzLjEwMS0uNjg2LjI4NGEuOTc0Ljk3NCAwIDAgMCAuMDAxIDEuMzczbDUuMDkyIDUuMDkyYy4xNzUuMTc1LjQyNS4yNzUuNjg2LjI3NXMuNTExLS4xLjY4Ny0uMjc1YS45MDQuOTA0IDAgMCAwIC4xMDctLjEzMmwxMC4yNjMtMTAuMzI4YS45NzUuOTc1IDAgMCAwIDAtMS4zNzN6Ii8+PC9zdmc+Cg==);\n  background-repeat: no-repeat;\n  background-color: #42abc8;\n  background-size: contain; }\n\n.form__checkbox--disabled + .form__label,\n.form__checkbox--disabled + .form__paragraph, .form__checkbox:disabled + .form__label,\n.form__checkbox:disabled + .form__paragraph, .form__checkbox[disabled] + .form__label,\n.form__checkbox[disabled] + .form__paragraph, .form__checkbox[readonly] + .form__label,\n.form__checkbox[readonly] + .form__paragraph,\nfieldset[disabled] .form__checkbox + .form__label,\nfieldset[disabled] .form__checkbox + .form__paragraph {\n  color: #acacac; }\n  .form__checkbox--disabled + .form__label::before,\n  .form__checkbox--disabled + .form__paragraph::before, .form__checkbox:disabled + .form__label::before,\n  .form__checkbox:disabled + .form__paragraph::before, .form__checkbox[disabled] + .form__label::before,\n  .form__checkbox[disabled] + .form__paragraph::before, .form__checkbox[readonly] + .form__label::before,\n  .form__checkbox[readonly] + .form__paragraph::before,\n  fieldset[disabled] .form__checkbox + .form__label::before,\n  fieldset[disabled] .form__checkbox + .form__paragraph::before {\n    background-color: #cdcdcd;\n    border-color: #cdcdcd;\n    color: #fff;\n    box-shadow: none; }\n";

var CheckboxWC =
/*#__PURE__*/
function (_LitElement) {
  _inherits(CheckboxWC, _LitElement);

  function CheckboxWC() {
    _classCallCheck(this, CheckboxWC);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxWC).apply(this, arguments));
  }

  _createClass(CheckboxWC, [{
    key: "render",
    value: function render() {
      return (0, _litElement.html)(_templateObject(), this.checked);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        checked: {
          type: Boolean,
          attribute: 'checked'
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return (0, _litElement.css)(_templateObject2(), (0, _litElement.unsafeCSS)(style));
    }
  }]);

  return CheckboxWC;
}(_litElement.LitElement);

exports["default"] = CheckboxWC;
customElements.define('ds-checkbox', CheckboxWC);