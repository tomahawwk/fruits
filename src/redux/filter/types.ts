export enum SortValueEnum {
    RATING_DESC = "rating",
    RATING_ASC = "-rating",
    PRICE_DESC = "price",
    PRICE_ASC = "-price",
    ALPHABET_DESC = "alphabet",
    ALPHABET_ASC = "-alphabet",
}

export type Sort = {
    label: string;
    value: SortValueEnum;
}

export interface FilterState {
    category: string;
    searchValue: string;
    currentPage: number;
    sort: Sort,
}