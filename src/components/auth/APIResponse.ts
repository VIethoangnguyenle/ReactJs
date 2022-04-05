export default class APIResponse<T> {
    success?:boolean
    code?: string;
    message?: string;
    data?: T;
}