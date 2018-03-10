import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

class Dropdown extends Component {
  state = {
    selectedName: '',
    selectedId: 0,
    opened: false,
  };

  componentDidMount() {
    this.setState({
      selectedName: this.props.title,
    });
  }

  handleOpenDropdown = e => {
    e.preventDefault();
    this.setState({
      opened: !this.state.opened,
    });
  };

  handleSelectItem = (name, id) => {
    this.setState({
      selectedId: id,
      selectedName: name,
      opened: false,
    });
  };

  handleAddItem = () => {
    if (this.state.selectedId) {
      this.props.onItemAdd(this.state.selectedId);
    }

    this.setState({
      selectedName: 'Wybierz składnik..',
    });
  };

  render() {
    const { options } = this.props;
    const dropdownListClass = this.state.opened ? 'dropdown__list  opened' : 'dropdown__list';

    return (
      <div className="dropdown-container">
        <div className="dropdown">
          <div className="dropdown__title" onClick={this.handleOpenDropdown}>
            {this.state.selectedName}
          </div>
          <ul className={dropdownListClass}>
            {options.map(option => (
              <li key={option.id} onClick={() => this.handleSelectItem(option.name, option.id)}>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={this.handleAddItem}>Dodaj</Button>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  onItemAdd: PropTypes.func.isRequired,
};

Dropdown.defaultProps = {
  title: 'Wybierz',
  options: [],
};

export default Dropdown;
