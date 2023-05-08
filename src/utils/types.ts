/*
 * @Author: Leancats 927497187@qq.com
 * @Date: 2023-05-05 14:44:33
 * @LastEditors: Leancats 927497187@qq.com
 * @LastEditTime: 2023-05-05 14:49:14
 * @FilePath: /webSite/src/utils/request.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { RequestOptionsInit } from 'umi-request';

export interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export type UserListResponse = ApiResponse<User[]>;

export type RequestConfig = RequestOptionsInit & {
    data?: Record<string, unknown>;
    params?: Record<string, unknown>;
};