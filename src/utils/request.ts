import { extend, ResponseError } from 'umi-request';


const errorHandler = (error: ResponseError): ResponseError => {
    console.error(error);
    const { response } = error;
    if (response) {
        const { status, statusText } = response;
        console.error(`请求失败： ${status} ${statusText}`);
    } else {
        console.error('网络错误，请求失败！');
    }
    throw error;
};

const request = extend({
    errorHandler,
    prefix: 'http://223.119.32.158:9001/CMILargeAccess/api',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});

export {
    request,
}