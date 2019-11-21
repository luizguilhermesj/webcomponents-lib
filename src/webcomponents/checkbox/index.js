import { LitElement, html, css } from 'lit-element';


export default class CheckboxWC extends LitElement {
  constructor() {
      super();

      this.shadowRoot.appendChild(document.createElement('slot'));
  }

  createRenderRoot() {
    this.attachShadow({mode: "open"});
    return this;
  }

  static get properties() {
    return {
      checked: {
        type: String,
        attribute: 'checked',
      }
    }
  }

  render() {
    console.log('[WC] render', this.checked);
    return html`
      <input type="checkbox" class="red" .checked="${this.checked}" />
      <span class="">Checkbox</span>
    `;
  }
}

customElements.define('ds-checkbox', CheckboxWC);