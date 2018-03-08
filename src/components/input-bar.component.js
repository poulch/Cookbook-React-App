import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'semantic-ui-react';

class InputBar extends Component {
  state = {
    input: '',
    error: '',
  };

  componentDidMount() {
    this.setState({
      input: this.props.value,
    });
  }

  clearInput = () => {
    this.setState({
      input: '',
      error: false,
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.value && this.state.input.length) {
      this.props.onFormSubmit({
        id: this.props.id,
        name: this.state.input,
        date: this.props.date,
        edited: false,
      });
      this.clearInput();
    } else if (this.state.input.length) {
      this.props.onFormSubmit(this.state.input);
      this.clearInput();
    } else {
      this.setState({
        error: true,
      });
    }
  };

  render() {
    const { icon, placeholder } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.error ? (
          <Input
            error
            className={this.props.inputClass}
            onChange={this.handleChange}
            value={this.state.input}
            icon={<Icon onClick={this.handleSubmit} name={icon} inverted circular link />}
            placeholder={placeholder}
          />
        ) : (
          <Input
            className={this.props.inputClass}
            onChange={this.handleChange}
            value={this.state.input}
            icon={<Icon onClick={this.handleSubmit} name={icon} inverted circular link />}
            placeholder={placeholder}
          />
        )}
      </form>
    );
  }
}

InputBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.number,
  inputClass: PropTypes.string,
};

InputBar.defaultProps = {
  placeholder: 'Search',
  icon: 'search',
  value: '',
  id: '',
  date: 0,
  inputClass: '',
};

export default InputBar;
