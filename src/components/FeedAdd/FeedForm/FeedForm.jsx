import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { categoryState } from 'atoms/category';

import { ImgAddPreview, SelectedCategory } from 'components/FeedAdd';
import { toast } from 'react-toastify';
import * as S from './styles';

export const FeedForm = ({ mutate, toggleModal, postData }) => {
  const [imgList, setImgList] = useState([]);
  const [text, setText] = useState(postData.content);

  const category = useRecoilValue(categoryState);

  const handleSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    const content = new Blob(
      [
        JSON.stringify({
          category_id: category.id,
          content: text
        })
      ],
      { type: 'application/json' }
    );

    if (!category.id) toast.warning('카테고리를 선택해주세요');
    if (!text) toast.warning('내용을 입력해주세요');

    if (category.id && text) {
      imgList.forEach(img => formData.append('images', img));
      formData.append('request', content);
      mutate(formData);
    }
  };

  return (
    <S.FormWrap onSubmit={handleSubmit}>
      <SelectedCategory category={category} toggleModal={toggleModal} />

      <S.TextBox
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="소소한 이야기도 좋아요. 질문이나 이야기를 나눠보세요."
      />

      <ImgAddPreview imgList={imgList} setImgList={setImgList} />

      <S.SubmitButton type="submit">게시물 올리기</S.SubmitButton>
    </S.FormWrap>
  );
};
