export interface ISortOption {
    name: string
    sortProperty: string
}
export interface IActiveSortAndCategory {
    sort: string
    category: number
}

export type TSetActiveCategory = (value: number) => void