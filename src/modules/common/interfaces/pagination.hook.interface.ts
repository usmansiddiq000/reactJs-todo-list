export interface IPaginationHook {
    totalCount: number,
    pageSize: number,
    siblingCount: number,
    currentPage: number
}