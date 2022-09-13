import api from "../config/api";
import { saveToken } from "../Helper/Validate";

export const register = (data) => {
  return new Promise(async (resolve, reject) => {
    await api
      .post("/api/v1/user/register", data)
      .then((result) => {
        return resolve(result);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};

export const confirmOtpRegister = (data) => {
  return new Promise(async (resolve, reject) => {
    await api
      .post("/api/v1/user/verify-otp-register", data)
      .then((result) => {
        return resolve(result);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};

export const resendOTP = (data) => {
  return new Promise(async (resolve, reject) => {
    await api
      .post("/api/v1/user/resend-otp", data)
      .then((result) => {
        return resolve(result);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};

export const login = (data) => {
  return new Promise(async (resolve, reject) => {
    await api
      .post("/api/v1/user/login", data)
      .then((result) => {
        return resolve(
          saveToken(result.data.accessToken, result.data.refreshToken)
        );
        // return resolve(result);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};

export const forgotPassword = (data) => {
  return new Promise(async (resolve, reject) => {
    await api
      .post("/api/v1/user/forgot-password", data)
      .then((result) => {
        return resolve(result);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};

export const updatePasswordForgot = (data, token) => {
  return new Promise(async (resolve, reject) => {
    await api
      .patch("/api/v1/user/new-password", data, {
        headers: {
          Authorization: token,
        },
      })
      .then((result) => {
        return resolve(result);
      })
      .catch((error) => {
        return reject(error.response);
      });
  });
};
