import http from "../http";

/**
 * 获取图文列表
 */
async function getArticleList(
  params: API.listParams
): Promise<Array<API.ArticleItemResponse>> {
  const { data } = await http.get("/article/list", { params });
  return data;
}

export { getArticleList };
