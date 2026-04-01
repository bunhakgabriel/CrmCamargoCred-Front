export interface IApiResponse<T, M = unknown> {
    success: boolean;
    data: T;
    message: string;
    meta?: M;
}
