import React from 'react';

class AvatarInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onAvatarChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
          <legend>頭貼</legend>
          <select onChange={this.handleChange}>
            <option value="FengRuanBus">豐原客運</option>
            <option value="HeXinBus">和欣客運</option>
          </select>
      </fieldset>
    )
  }
}

export default AvatarInput;
