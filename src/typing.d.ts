declare namespace ApiResponse {
  interface OrderBy {
    CREATETIME: "createTime";
    LIKE: "like";
  }
  interface Order {
    DESC: "DESC";
    ASC: "ASC";
  }

  interface listParams {
    page: number;
    pageSize: number;
    orderBy?: OrderBy;
    order?: Order;
  }

  interface ArticleItemResponse {
    id: number;
    title: string;
    poster: string;
    content: string;
    pv: number;
    likeCount: number;
  }
}
