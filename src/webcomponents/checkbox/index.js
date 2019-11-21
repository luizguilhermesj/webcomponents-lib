import { LitElement, html, css, unsafeCSS } from 'lit-element';
import style from './style.scss';

export default class CheckboxWC extends LitElement {

  static get properties() {
    return {
      checked: {
        type: Boolean,
        attribute: 'checked',
      }
    }   
  }

  static get styles() {
    return css`${unsafeCSS(style)}`;
  }

  render() {
    return html`
        <input type="checkbox" class="form__checkbox" .checked="${this.checked}" @onC/>
        <label class="form__label"/>
        <slot></slot>
    `;
  }
}

customElements.define('ds-checkbox', CheckboxWC);