import axios from "axios";

import { USER_INFORMATION_URL, USER_SERVERS_URL } from "../Utils/constants";

export const getUserInformationService = async (token) => {
	try {
		const { data } = await axios.get(USER_INFORMATION_URL, { headers: { Authorization: `token ${token}` } });

		return data;
	} catch (err) {
		throw err.response.data;
	}
};

export const getUserServersService = async (token) => {
	try {
		const { data } = await axios.get(USER_SERVERS_URL, { headers: { Authorization: `token ${token}` } });

		return data;
	} catch (err) {
		throw err.response.data;
	}
};
