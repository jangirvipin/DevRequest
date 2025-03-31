// axiosConfig.ts

interface RequestConfigOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url?: string;
    params?: object;
    data?: JSON;
    headers?: Record<string, string>;
    timeout?: number;
    withCredentials?: boolean;
}


const createRequestConfig = ({
                                 method = 'POST',
                                 url = '',
                                 params = {},
                                 data = null,
                                 headers = {},
                                 timeout = 10000,
                                 withCredentials = false
                             }: RequestConfigOptions) => {

    const defaultHeaders = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    return {
        method,
        url,
        params,
        data,
        headers: { ...defaultHeaders, ...headers },
        timeout,
        withCredentials
    };
};

export { createRequestConfig };