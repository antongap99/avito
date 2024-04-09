import axios from "axios";
import * as process from "process";



export const $api = axios.create({
	baseURL:  process.env.API_TOKEN,
	headers: {
		'X-API-KEY': process.env.API_TOKEN
	}
})