import { AxiosInstance } from "axios";
import ArticleApi from "./module/article";
import http from "./http";

class Api {
  Article: ArticleApi;
  constructor(axios: AxiosInstance) {
    this.Article = new ArticleApi(axios);
    // ...
  }
}

export default new Api(http);
