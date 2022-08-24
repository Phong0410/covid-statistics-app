import axiosClient from "./axiosClient"

const historyApi = {
	getAll: (params) => {
		const url = "/history"
		return axiosClient.get(url, params)
	}
}

export default historyApi
