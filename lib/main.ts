import axios from "axios";
import { createRequestConfig } from './axiosConfig';

async function getUrl(
    url: string,
    query:object,
    method,
    token?:string,
    body?:JSON
) {
    try {
        const headers: Record<string, string> = {};
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const response = await axios(
            createRequestConfig({
                    method,
                    url,
                    params:query,
                    headers,
                    data:body
                }))

        return {
            status: response.status,
            success: true,
            data: response.data
        };
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.log(e)
            if (e.response) {
                return {
                    status: e.response.status,
                    success: false,
                    data:{}
                };
            } else if (e.request) {
                return {
                    status: 0,
                    success: false,
                    data:{}
                };
            }
        }
        return {
            status: 0,
            success: false,
            data:{}
        };
    }
}

export default getUrl;