import axios from "../../services/axios.service";
import { API_VERSION_1_0 } from "../../constants/ApiPath";

const moduleRoot = API_VERSION_1_0;

class permissionService {
  getAllPermissions(data) {
    return axios.get(`${moduleRoot}permissions`, data);
  }
}
const permission = new permissionService();
export default permission;
