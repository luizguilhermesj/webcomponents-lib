import React from 'react';
import CheckboxWC from '../../webcomponents/checkbox';

export default class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }
  }

  toggle() {
    console.log('[REACT] toggle', this.state.checked, ' -> ', !this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
    this.forceUpdate();
  }

  change(state) {
    console.log('[REACT] change to', state);
  }

  render() {
    console.log('[REACT] render', this.state.checked);
    return <div>
      <ds-checkbox
        checked={this.state.checked ? 'checked' : ''}
        onClick={this.toggle.bind(this)}
      >
        <span>CHILD</span>

      </ds-checkbox>
      <button onClick={this.toggle.bind(this)}/>
    </div>
  }
}