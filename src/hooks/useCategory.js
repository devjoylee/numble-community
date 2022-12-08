import { useQuery } from 'react-query';
import { category } from 'api/queries/category';

// 카테고리 id를 넣으면 카테고리 이름을 출력
export const useCategory = id => {
  const { data, isLoading } = useQuery(['category'], category.getList);
  const category_list = !isLoading && data.category_list;
  const category_name =
    data && !isNaN(id)
      ? category_list.filter(item => item.category_id === Number(id))[0]
          .category_name
      : '';

  return category_name;
};
