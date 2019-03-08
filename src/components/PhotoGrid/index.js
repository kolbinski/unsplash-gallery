import React, {PureComponent} from 'react';
import Gallery from "react-photo-gallery";
import './style.css';

export default class PhotoGrid extends PureComponent {
  render() {
    const {data} = this.props.gallery;
    const photos = data.map(item => ({
      src: item.urls.regular,
      width: item.width,
      height: item.height,
    }));
    return (
      <div className="PhotoGrid">
        <Gallery photos={photos} />
      </div>
    );
  }
}
