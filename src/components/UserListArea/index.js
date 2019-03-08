import React, {PureComponent} from 'react';
import {
  User,
  Search,
} from '../';
import {
  // InfinityScroll,
} from '../../containers';
import './style.css';

export default class UserListArea extends PureComponent {

  render() {
    const {
      data,
      // page,
      activeUsername,
      onSelectUser,
      onSearch,
      // onLoadUsernamesPage,
      keyword,
      // hasMore,
    } = this.props;
    return (
      <div className="UserListArea">
        <div className="UserListArea__content">
          <Search
            value={keyword}
            onSearch={onSearch}
          />
          {data.map(user => (
            <User
              key={user.id}
              {...user}
              onSelectUser={onSelectUser}
              active={user.username === activeUsername}
            />
          ))}
        </div>
      </div>
    );
  }
}

// <InfinityScroll
//   onLoad={onLoadUsernamesPage}
//   pageStart={page}
//   hasMore={hasMore}
// >
//   {data.map(user => (
//     <User
//       key={user.id}
//       {...user}
//       onSelectUser={onSelectUser}
//       active={user.username === activeUsername}
//     />
//   ))}
// </InfinityScroll>
