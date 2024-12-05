import ApiService from "./ApiService";

export async function apiPlaceOrder(data) {
  return ApiService.fetchData({
    url: "v1/web/order/register",
    method: "post",
    data,
  });
}

export async function apiCustomerOrders(data) {
  return ApiService.fetchData({
    url: "v1/web/customer",
    method: "post",
    data,
  });
}
