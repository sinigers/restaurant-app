import { BASE_URL } from "../constants";
import useFetch from "react-fetch-hook";

export const create = async (productData) => {
  let res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  });
  let jsonResult = await res.json();
  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult;
  }
};

export const getAllProducts = async () => {
  let res = await fetch(`${BASE_URL}/products`, {
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

export const getOne = async (productId) => {
  let res = await fetch(`${BASE_URL}/${productId}`, {
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

// export const edit = async (productData, productId) =>
//   request.patch(`${BASE_URL}/${productId}/edit`, productData);
export const edit = async (productData, productId) => {
  // console.log(productData);
  // console.log("---------------");
  // console.log(productId);

  let res = await fetch(`${BASE_URL}/${productId}/edit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(productData)
  });
  let jsonResult = await res.json();
  if (res.ok) {
    return jsonResult;
  } else {
    throw jsonResult;
  }
};

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

// import { BASE_URL } from "../constants";

// export const create = async (
//   { title, body, alergens, weight, unit, type, price, imageURL },
//   token
// ) => {
//   let product = {
//     title,
//     body,
//     alergens,
//     weight,
//     unit,
//     type,
//     price,
//     imageURL
//   };

//   let res = await fetch(`${BASE_URL}/create`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(product)
//   });

//   let jsonResult = await res.json();
//   if (res.ok) {
//     return jsonResult;
//   } else {
//     throw jsonResult;
//   }
// };

// export const edit = async (
//   id,
//   { title, body, alergens, weight, unit, type, price, imageURL },
//   token
// ) => {
//   let product = {
//     title,
//     body,
//     alergens,
//     weight,
//     unit,
//     type,
//     price,
//     imageURL
//   };

//   let res = await fetch(`${BASE_URL}/${id}/edit`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(product)
//   });
//   let jsonResult = await res.json();
//   if (res.ok) {
//     return jsonResult;
//   } else {
//     throw jsonResult;
//   }
// };

// export const getAllProducts = async () => {
//   let res = await fetch(`${BASE_URL}/movies`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   let jsonResult = await res.json();
//   if (res.ok) {
//     return jsonResult;
//   } else {
//     throw jsonResult;
//   }
// };

// export const getLastSix = async () => {
//   let res = await fetch(`${BASE_URL}/lastsix`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   let jsonResult = await res.json();
//   if (res.ok) {
//     return jsonResult;
//   } else {
//     throw jsonResult;
//   }
// };

// export const getOne = async (id) => {
//   let res = await fetch(`${BASE_URL}/${id}/details`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });
//   let jsonResult = await res.json();
//   if (res.ok) {
//     return jsonResult;
//   } else {
//     throw jsonResult;
//   }
// };

// export const deleteOne = async (id) => {
//   let res = await fetch(`${BASE_URL}/${id}/delete`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });

//   let jsonResult = await res.json();

//   if (res.ok) {
//     return jsonResult;
//   } else {
//     throw jsonResult;
//   }
// };
