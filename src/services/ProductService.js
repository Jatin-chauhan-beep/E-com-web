import ApiService from "./ApiService";

export async function apiGetAllProducts(data) {
  return ApiService.fetchData({
    url: "v1/web/products",
    method: "post",
    data,
  });
}
