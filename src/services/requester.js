export const request = async (method, url, data) => {
  let result = null;

  if (method === "GET") {
    result = fetch(url, {
      method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify()
    });
  } else {
    result = fetch(url, {
      method,
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }

  return result.then(responseHandler);
};

async function responseHandler(res) {
  let jsonData = await res.json();

  if (res.ok) {
    return jsonData;
  } else {
    throw jsonData;
  }
}

// export const deleteProduct = request.bind(null, "DELETE");
// export const get = request.bind(null, "GET");
export const patch = request.bind(null, "PATCH");
export const post = request.bind(null, "POST");
