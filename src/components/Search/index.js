import React, {PureComponent} from 'react';
import {debounce} from 'lodash';
import './style.css';

export default class Search extends PureComponent {

  onSearchChange = debounce(() => {
    const {value} = this.refs.search;
    this.props.onSearch(value);
  }, 300);

  render() {
    const {value} = this.props;
    return (
      <div className="Search">
        <input
          className="Search__input"
          ref="search"
          onKeyUp={this.onSearchChange}
          placeholder="Search users"
          defaultValue={value}
        />
      </div>
    );
  }
}
