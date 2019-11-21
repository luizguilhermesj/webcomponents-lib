import { LitElement } from 'lit-element';
export default class WCElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.removedNodes.forEach(node => {
          if (node.nodeType !== Node.COMMENT_NODE) {
            this.appendChild(node);
          }
        });
      });
    });
    this.observer.observe(this, {
      childList: true
    });
  }

  firstUpdate() {
    this.observer.disconnect();
  }

}