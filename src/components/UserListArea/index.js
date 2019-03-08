import React, {PureComponent} from 'react';
import {
  User,
  Search,
  Loader,
  Message,
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
      loading,
      error,
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
          {loading && <Loader />}
          {error && (
            <Message>
              {'Error while getting users data.'}
            </Message>
          )}
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
