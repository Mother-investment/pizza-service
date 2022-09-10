export interface ISortOption {
    name: string
    sortProperty: string
}
export interface IActiveSortAndCategory {
    sort: string
    category: number
    order: boolean
}

export type TSetActiveCategory = (value: number) => void