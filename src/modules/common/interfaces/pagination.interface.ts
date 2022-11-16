import { IPaginationHook } from "./index"

export interface IPagination extends IPaginationHook {
    onPageChange(page: number): void
}