import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useMutation } from 'react-query';
import { feed } from 'api/queries/feed';

import { useSetRecoilState } from 'recoil';
import { categoryState } from 'atoms/category';
import { useCategory } from 'hooks/useCategory';

import { PageHeader } from 'components/Common';
import { FeedForm, CategoryModal } from 'components/FeedAdd';
import { toast } from 'react-toastify';
import * as S from './styles';

export const FeedAddPage = () => {
  const [modal, setModal] = useState(true);
  const setCategory = useSetRecoilState(categoryState);

  const { state } = useLocation();
  const category_name = useCategory(state.category_id);
  const hasCategory = !isNaN(+state.category_id);

  const navigate = useNavigate();
  const toggleModal = () => setModal(prev => !prev);

  const { mutate } = useMutation(feed.add, {
    onSuccess: res => {
      console.log(res);
      toast.success('게시글 생성 성공 🎉');
      navigate(`/feed/${res.feed_id}`);
    },
    onError: error => {
      console.log(error.message);
      toast.error('게시글 생성에 실패했습니다. 다시 시도해주세요.');
    }
  });

  useEffect(() => {
    setCategory({ id: +state.category_id, name: category_name });
  }, [state, category_name, setCategory]);

  return (
    <S.PageContainer>
      <PageHeader backTo="/" title={'게시글 작성'} />

      {modal && !hasCategory && <CategoryModal toggleModal={toggleModal} />}

      <FeedForm mutate={mutate} toggleModal={toggleModal} />
    </S.PageContainer>
  );
};
