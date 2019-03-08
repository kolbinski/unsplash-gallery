import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {
  UserListArea,
  PhotoGrid,
  Footer,
} from '../../components';
import {
  loadUsers,
  loadUserPhotos,
} from '../../actions';
import './style.css';

class UnsplashGallery extends PureComponent {

  handleSearch = keyword => this.props.dispatch(loadUsers(keyword));

  handleSelectUser = username => this.props.dispatch(loadUserPhotos(username));

  render() {
    const {
      gallery,
      username,
      users,
      keyword,
      loadingUsers,
      usersError,
      loadingGallery,
      galleryError,
    } = this.props;
    return (
      <div className="UnsplashGallery">
        <UserListArea
          data={users.data}
          keyword={keyword}
          activeUsername={username}
          onSearch={this.handleSearch}
          onSelectUser={this.handleSelectUser}
          onLoadUsernamesPage={this.handleSearch}
          page={users.page}
          hasMore={users.hasMore}
          loading={loadingUsers}
          error={usersError}
        />
        <PhotoGrid
          gallery={gallery}
          loading={loadingGallery}
          error={galleryError}
          activeUsername={username}
        />
        <Footer />
      </div>
    );
  }
}

const selector = createSelector(
  state => state.keyword,
  state => state.username,
  state => state.users,
  state => state.gallery,
  (
    keyword,
    username,
    users,
    gallery,
  ) => ({
    keyword,
    username,
    users: users[keyword] || {data: [], page: 0, hasMore: true},
    gallery: gallery[username] || {data: [], page: 0, hasMore: true},
    loadingUsers: users.loading,
    usersError: users.error,
    loadingGallery: gallery.loading,
    galleryError: gallery.error,
  }),
);

export default connect(selector)(UnsplashGallery);
