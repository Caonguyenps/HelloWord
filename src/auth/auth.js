import jwt_decode from "jwt-decode";

export const checkTimeToken = (token) => {
  const dataToken = jwt_decode(token);
  const timeToken = dataToken.exp;
  const timeNow = new Date().getTime();
  const compareTime = (timeNow - timeToken * 1000) / 60000;
  if (compareTime < 0) {
    return true;
  } else {
    return false;
  }
};
