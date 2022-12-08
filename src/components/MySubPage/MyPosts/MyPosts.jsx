import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { ThumbTop } from 'components/Post';
import { EditDeleteButton, EmptyList, FetchObserver } from 'components/Common';
import { feed } from 'api/queries/feed';
import * as S from './styles';

export const MyPosts = ({ infiniteResponse }) => {
  const { data, isLoading, isFetching, fetchNextPage, refetch } =
    infiniteResponse;

  const navigete = useNavigate();
  const isEmpty = !isLoading && !data.pages[0].feed_list.length;

  const { mutate: removeMutate } = useMutation(feed.remove, {
    onSuccess: res => {
      console.log(res);
      refetch();
      toast.success('게시글 삭제 완료 🎉');
    },
    onError: error => {
      console.log(error.message);
      toast.error('게시글 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  });

  if (isEmpty) return <EmptyList message="아직 게시글이 없어요" />;

  return (
    <S.ListContainer>
      {!isLoading &&
        data.pages.map(page =>
          page.feed_list.map(post => (
            <ThumbTop key={post.feed_id} postData={post}>
              <EditDeleteButton
                // handleEdit={() =>
                //   navigete('/feed/add', {
                //     state: {
                //       post: post
                //     }
                //   })
                // }
                handleEdit={() => toast.warning('서비스 준비 중 입니다.')}
                handleDelete={() => removeMutate(post.feed_id)}
              />
            </ThumbTop>
          ))
        )}

      <FetchObserver
        data={data}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    </S.ListContainer>
  );
};
