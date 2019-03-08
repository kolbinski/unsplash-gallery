import React, {PureComponent} from 'react';
import cs from 'classnames';
import './style.css';

export default class User extends PureComponent {
  render() {
    const {
      name,
      username,
      profile_image: {medium},
      active,
      onSelectUser,
    } = this.props;
    return (
      <div
        className={cs('User', {active})}
        onClick={() => onSelectUser(username)}
      >
        <figure
          className="User__avatar"
          style={{backgroundImage: `url(${medium})`}}
        />
        <div className="User__details">
          <h3>{name}</h3>
        </div>
      </div>
    );
  }
}
