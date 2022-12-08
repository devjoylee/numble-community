import React from 'react';

import { useSetRecoilState } from 'recoil';
import { categoryState } from 'atoms/category';

import { Category } from 'components/Common';
import { SelectedCategory } from 'components/FeedAdd';
import * as S from './styles';

export const CategoryModal = ({ toggleModal }) => {
  const setCategory = useSetRecoilState(categoryState);

  const handleSelect = e => {
    const curretId = e.target.parentElement.id;
    const currentName = e.target.innerText;

    setCategory({ id: curretId, name: currentName });
    toggleModal();
  };

  return (
    <S.SelectingView onClick={toggleModal}>
      <SelectedCategory toggleModal={toggleModal} />
      <S.CategoryList onClick={e => e.stopPropagation()}>
        <Category onClick={handleSelect} />
      </S.CategoryList>
    </S.SelectingView>
  );
};
