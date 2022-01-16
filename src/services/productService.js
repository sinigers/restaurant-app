import { BASE_URL } from "../constants";
import * as request from "./requester";

export const create = async (productData) =>
  request.post(`${BASE_URL}/create`, productData);

export const getAllProducts = () => request.get(`${BASE_URL}/products`);

export const getOne = async (productId) =>
  request.get(`${BASE_URL}/${productId}`);

export const deleteproduct = async (productId) =>
  request.deleteProduct(`${BASE_URL}/${productId}/delete`);

export const edit = async (productData, productId) =>
  request.patch(`${BASE_URL}/${productId}/edit`, productData);
