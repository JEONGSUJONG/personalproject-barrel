import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "" : "http://localhost:5000/api/v1",
});

export default axiosInstance;
