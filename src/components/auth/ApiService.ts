import axios, { AxiosRequestConfig, Method } from "axios";
import APIResponse from "./APIResponse";

export default class ApiService<T,U> {

	callApi = async (request: T, path:string, method: Method): Promise<APIResponse<U>> => {
        const requestConfig: AxiosRequestConfig = {
            method: method,
            url: path,
            data: request
        }
        const {data : response} = await axios.request(requestConfig);
		return response;
	};
};
