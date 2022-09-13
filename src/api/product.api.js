import api from "../config/api";

export const getCategoryProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    await api
      .get("/api/v1/category/product")
      .then((result) => {
        return resolve(result.data);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};
