import React, {PureComponent} from 'react';
import Gallery from "react-photo-gallery";
import {
  Loader,
  Message,
} from '../';
import './style.css';

export default class PhotoGrid extends PureComponent {
  render() {
    const {
      gallery: {data},
      loading,
      error,
      activeUsername,
    } = this.props;
    const photos = data.map(item => ({
      src: item.urls.regular,
      width: item.width,
      height: item.height,
    }));
    return (
      <div className="PhotoGrid">
        <Gallery photos={photos} />
        {loading && <Loader />}
        {error && (
          <Message>
            {'Error while getting users data.'}
          </Message>
        )}
        {!loading && activeUsername !== '' && photos.length === 0 && (
          <Message>
            {'No photos found.'}
          </Message>
        )}
      </div>
    );
  }
}
