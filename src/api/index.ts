import { AxiosInstance } from "axios";
import ArticleApi from "./module/article";

class Api {
  Article: ArticleApi;
  constructor(axios: AxiosInstance) {
    this.Article = new ArticleApi(axios);
    // ...
  }
}
