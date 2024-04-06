import axios from "../../services/axios.service";
import { API_VERSION_1_0 } from "../../constants/ApiPath";

const moduleRoot = API_VERSION_1_0;

class userService {
  registerUser(data) {
    return axios.post(`${moduleRoot}auth/sign-up`, data);
  }

  verifyAccount(userId, token, data) {
    //return axios.post(`${moduleRoot}/verify/${userId}/${token}`, data);
  }

  loginUser(data) {
    return axios.post(`${moduleRoot}auth/sign-in`, data);
  }

  forgotPassword(data) {
    //return axios.post(`${moduleRoot}/forgot-password`, data);
  }

  resetPassword(userId, token, data) {
    //return axios.post(`${moduleRoot}/reset-password/${userId}/${token}`, data);
  }
}
const user = new userService();
export default user;
