import ApiService from "./ApiService";

export async function apiUserSignInRequest(data) {
  return ApiService.fetchData({
    url: "v1/web/user/login",
    method: "post",
    data,
  });
}

export async function apiCustomerSignInRequest(data) {
  return ApiService.fetchData({
    url: "v1/web/customer/login",
    method: "post",
    data,
  });
}
