import { LitElement, html, css, unsafeCSS } from 'lit-element';
const style = "/* Primary colors\n--------------------------------*/\n/* Gray shades\n--------------------------------*/\n/* Secondary colors\n--------------------------------*/\n/* Secondary shades\n--------------------------------*/\n/* Semantic mappings\n--------------------------------*/\n/* 3rd-party branding colors\n--------------------------------*/\n/* Contents colors\n--------------------------------*/\n.form__checkbox {\n  display: none; }\n\n.form__checkbox + .form__label::before,\n.form__checkbox + .form__paragraph::before {\n  content: \"\";\n  color: #fff;\n  display: inline-block;\n  background: #42abc8;\n  border: 1px solid #acacac;\n  box-shadow: inset 0 0 0 8px #fff;\n  transition: box-shadow 0.2s;\n  height: 1em;\n  width: 1em;\n  font-size: 16px;\n  line-height: 1em;\n  margin-right: 4px;\n  vertical-align: middle;\n  transform: translateY(-0.06em);\n  border-radius: 2px; }\n\n.form__checkbox:checked + .form__label::before,\n.form__checkbox:checked + .form__paragraph::before {\n  content: \"\";\n  box-shadow: none;\n  border-color: #42abc8;\n  width: 1em;\n  height: 1em;\n  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTI0LjQxNyAxMC4wODNjLS4xNzUtLjE3NS0uNDI1LS4yNzUtLjY4Ni0uMjc1cy0uNTExLjEwMS0uNjg3LjI3NmwtOS42OTggOS43NTktNC4zOTEtNC4zOTFjLS4xODQtLjE4My0uNDI4LS4yODMtLjY4Ny0uMjgzcy0uNTAzLjEwMS0uNjg2LjI4NGEuOTc0Ljk3NCAwIDAgMCAuMDAxIDEuMzczbDUuMDkyIDUuMDkyYy4xNzUuMTc1LjQyNS4yNzUuNjg2LjI3NXMuNTExLS4xLjY4Ny0uMjc1YS45MDQuOTA0IDAgMCAwIC4xMDctLjEzMmwxMC4yNjMtMTAuMzI4YS45NzUuOTc1IDAgMCAwIDAtMS4zNzN6Ii8+PC9zdmc+Cg==);\n  background-repeat: no-repeat;\n  background-color: #42abc8;\n  background-size: contain; }\n\n.form__checkbox--disabled + .form__label,\n.form__checkbox--disabled + .form__paragraph, .form__checkbox:disabled + .form__label,\n.form__checkbox:disabled + .form__paragraph, .form__checkbox[disabled] + .form__label,\n.form__checkbox[disabled] + .form__paragraph, .form__checkbox[readonly] + .form__label,\n.form__checkbox[readonly] + .form__paragraph,\nfieldset[disabled] .form__checkbox + .form__label,\nfieldset[disabled] .form__checkbox + .form__paragraph {\n  color: #acacac; }\n  .form__checkbox--disabled + .form__label::before,\n  .form__checkbox--disabled + .form__paragraph::before, .form__checkbox:disabled + .form__label::before,\n  .form__checkbox:disabled + .form__paragraph::before, .form__checkbox[disabled] + .form__label::before,\n  .form__checkbox[disabled] + .form__paragraph::before, .form__checkbox[readonly] + .form__label::before,\n  .form__checkbox[readonly] + .form__paragraph::before,\n  fieldset[disabled] .form__checkbox + .form__label::before,\n  fieldset[disabled] .form__checkbox + .form__paragraph::before {\n    background-color: #cdcdcd;\n    border-color: #cdcdcd;\n    color: #fff;\n    box-shadow: none; }\n";
const sheet = new CSSStyleSheet();
sheet.replaceSync(style);
console.log(style);
export default class CheckboxWC extends LitElement {
  constructor() {
    super();
    this.shadowRoot.appendChild(document.createElement('slot'));
  }

  static get properties() {
    return {
      checked: {
        type: String,
        attribute: 'checked'
      }
    };
  }

  static get styles() {
    return css`${unsafeCSS(style)}`;
  }

  render() {
    console.log('[WC] render', this.checked);
    return html`
      <input type="checkbox" class="form__checkbox" .checked="${this.checked}" />
      <label class="form__label"/>
    `;
  }

}
customElements.define('ds-checkbox', CheckboxWC);