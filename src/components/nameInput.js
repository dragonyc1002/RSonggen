import React from 'react';

class NameInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onNameChange(e.target.value);
  }

  render() {
    return (
      <fieldset>
        <legend>名稱</legend>
        <select onChange={this.handleChange}>
          <option value="雷煒崧">雷煒崧</option>
          <option value="新增">如果有何名稱建議歡迎私訊!</option>
        </select>
      </fieldset>
    )
  }
}

export default NameInput;
