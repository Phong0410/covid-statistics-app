import axiosClient from "./axiosClient"

const statisticsApi = {
	getAll: (params) => {
		const url = "/statistics"
		return axiosClient.get(url, params)
	}
}

export default statisticsApi
