import axiosClient from "./axiosClient";

const statisticsApi = {
  getData: (params) => {
    const url = "/statistics";
    return axiosClient.get(url, { params });
  },
};

export default statisticsApi;
