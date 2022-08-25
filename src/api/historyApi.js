import axiosClient from "./axiosClient";

const historyApi = {
  getData: (params) => {
    const url = "/history";
    return axiosClient.get(url, { params });
  },
};

export default historyApi;
