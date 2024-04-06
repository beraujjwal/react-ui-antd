import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { AppSpin } from '../spines/AppSpin';
import * as S from './AppFeed.styles';


export const AppFeed = ({ next, hasMore, target = 'main-content', children }) => {
  return (
    <InfiniteScroll
      dataLength={children.length}
      next={next}
      hasMore={hasMore}
      loader={
        <S.SpinnerWrapper>
          <AppSpin size="large" />
        </S.SpinnerWrapper>
      }
      scrollableTarget={target}
    >
      <S.NewsWrapper>{children}</S.NewsWrapper>
    </InfiniteScroll>
  );
};
