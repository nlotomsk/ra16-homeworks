import { Component } from 'react';
import PropTypes from 'prop-types';

export default class TimeZonesForm extends Component {
  clearForm = { title: '', zone: '' };
  state = this.clearForm;

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addClock(this.state);
    this.setState(this.clearForm);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="time-zones__form" onSubmit={this.handleSubmit}>
        <label>
          <div>Name clock</div>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          <div>GMT</div>
          <input
            type="number"
            min="-12"
            max="12"
            name="zone"
            value={this.state.zone}
            onChange={this.handleChange}
            required
          />
        </label>
        <button>add</button>
      </form>
    );
  }
}

TimeZonesForm.propTypes = {
  addClock: PropTypes.func.isRequired,
};