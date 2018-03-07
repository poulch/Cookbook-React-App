import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Input } from 'semantic-ui-react';

class InputBar extends Component {
  state = {
    input: '',
  };

  componentDidMount() {
    this.setState({
      input: this.props.value,
    });
  }

  handleChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.value) {
      this.props.onFormSubmit({
        id: this.props.id,
        name: this.state.input,
        date: this.props.date,
        edited: false,
      });
    } else {
      this.props.onFormSubmit(this.state.input);
    }
    this.setState({
      input: '',
    });
  };

  render() {
    const { icon, placeholder } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleChange}
          value={this.state.input}
          icon={<Icon onClick={this.handleSubmit} name={icon} inverted circular link />}
          placeholder={placeholder}
        />
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
};

InputBar.defaultProps = {
  placeholder: 'Search',
  icon: 'search',
  value: '',
  id: '',
  date: 0,
};

export default InputBar;
