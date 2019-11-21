import { LitElement, html, css, unsafeCSS } from 'lit-element';
import style from './style.scss';

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
        attribute: 'checked',
      }
    }
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