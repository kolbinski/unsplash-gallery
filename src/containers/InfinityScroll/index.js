import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

export default ({
  children,
  pageStart,
  hasMore,
  onLoad,
}) => (
  <InfiniteScroll
    pageStart={pageStart}
    loadMore={onLoad}
    hasMore={hasMore}
    loader={<div className="loader" key={0}>Loading ...</div>}
>
    {children}
</InfiniteScroll>
);
