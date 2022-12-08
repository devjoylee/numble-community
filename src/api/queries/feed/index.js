import { apiWithToken } from 'api';
import * as EP from './endpoint';

export const feed = {
  add: async data => {
    const res = await apiWithToken.post(EP.ADD_FEED, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  },
  edit: async req => {
    const res = await apiWithToken.patch(EP.FEED_ITEM, req, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return res.data;
  },
  remove: async req => {
    const res = await apiWithToken.delete(EP.FEED_ITEM(req));
    return res;
  },
  list: async ({ cursorId, pageId, sortType }) => {
    const res = await apiWithToken.get(
      EP.GET_FEED_LIST(cursorId, pageId, sortType)
    );
    return res.data;
  },
  detail: async ({ queryKey }) => {
    const { feedId } = queryKey[1];
    const res = await apiWithToken.get(EP.FEED_ITEM(feedId));
    return res.data;
  },
  addBookmark: async req => {
    const res = await apiWithToken.post(EP.BOOKMARK(req), req);
    return res.data;
  },
  removeBookmark: async req => {
    const res = await apiWithToken.delete(EP.BOOKMARK(req));
    return res;
  },
  addLike: async req => {
    const res = await apiWithToken.post(EP.LIKE(req), req);
    return res.data;
  },
  removeLike: async req => {
    const res = await apiWithToken.delete(EP.LIKE(req));
    return res;
  }
};
