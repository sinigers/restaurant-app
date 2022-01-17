import { BASE_URL } from "../constants";
import * as request from "./requester";

export const create = async (productData) =>
  request.post(`${BASE_URL}/create`, productData);

export const getAllProducts = () => request.get(`${BASE_URL}/products`);

export const getOne = async (productId) =>
  request.get(`${BASE_URL}/${productId}`);

// export const deleteOne = async (productId) =>
//   request.deleteProduct(`${BASE_URL}/${productId}/delete`);

export const edit = async (productData, productId) =>
  request.patch(`${BASE_URL}/${productId}/edit`, productData);

export const deleteOne = async (productId) => {
  let res = await fetch(`${BASE_URL}/${productId}/delete`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  let jsonResult = await res.json();

  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult;
  }
};
