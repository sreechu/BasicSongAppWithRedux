import * as Constants from './constants';

const refreshToken = () => {
    let currUser = JSON.parse(localStorage.getItem("my_app_user"));
    let getUserFormData = new FormData();
    getUserFormData.append("grant_type", "refresh_token");
    getUserFormData.append("refresh_token", currUser.refresh_token);
    return new Promise((resolve, reject) => {
      my_app
      .post(`${Constants.AUTH_URL}`, getUserFormData, {
        headers: {
          Authorization: `Basic ${Constants.CLIENT_SECRET}`
        }
      })
      .then(async response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
    });
  };