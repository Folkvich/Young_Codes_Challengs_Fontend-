export interface ApiResponse<T> {
    status: string,
    result?: T,
    error?: any
}