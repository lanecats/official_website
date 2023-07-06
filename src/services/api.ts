/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-05-05 14:51:17
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-05 15:19:36
 * @FilePath: /webSite/src/services/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from '../utils/request';
import { UserListResponse, RequestConfig, User, ApiResponse } from '../utils/types';

export const getUsers = (config?: RequestConfig): Promise<UserListResponse> => {
    return request.get('/machineCitySum', config);
};

export const createUser = (data: Record<string, unknown>, config?: RequestConfig): Promise<ApiResponse<User>> => {
    return request.post('/users', { data, ...config });
};