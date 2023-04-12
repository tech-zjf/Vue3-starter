import { AxiosInstance } from "axios";

class ArticleApi {
  axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  /** 图文列表 */
  async getArticleList(
    params: ApiResponse.listParams
  ): Promise<ApiResponse.ArticleItemResponse[]> {
    const { data } = await this.axios.get(`/article/list`, {
      params,
    });
    return data;
  }

  /** 图文详情 */
  async getArticleDetail(
    articleId: number
  ): Promise<ApiResponse.ArticleItemResponse> {
    const { data } = await this.axios.get(`/article/${articleId}`);
    return data;
  }
}

export default ArticleApi;
