import axiosClient from "./axiosClient"

const countryApi = {
	getAll: () => {
		const url = "/countries"
		return axiosClient.get(url)
	}
}

export default countryApi
