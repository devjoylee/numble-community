import React from 'react';

import { useRecoilValue } from 'recoil';
import { categoryState } from 'atoms/category';

import { Icon } from 'components/Common';
import { svgs } from 'components/Common/Category/svgs';
import { ReactComponent as Question } from 'assets/icons/question_mark.svg';
import * as S from './styles';

export const SelectedCategory = ({ toggleModal }) => {
  const category = useRecoilValue(categoryState);

  return (
    <S.CategoryBox
      className={`${category.name ? 'onSelected' : 'onSelecting'}`}
    >
      <S.CategoryImg onClick={toggleModal}>
        {!category.name ? (
          <Icon Icon={Question} size={18} color="#fff" />
        ) : (
          <Icon Icon={svgs[category.id - 1]} size={65} stroke={'#fff'} />
        )}
      </S.CategoryImg>

      <S.CategoryNameBtn type="button" onClick={toggleModal}>
        {category.name || '카테고리 선택'}
      </S.CategoryNameBtn>
    </S.CategoryBox>
  );
};
