export type SearchParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
}

export enum Status {
    LOADING = 'pending',   
    SUCCESS = 'filled',
    ERROR = 'failure'
}

export type Fruit = {
    id: string;
    category: string;
    title: string;
    price: number;
    oldprice: number;
    quantity: number;
    description: string;
    desktopImage: string;
    phoneImage: string;
    count: number;
    index: number;
}

export interface FruitsState {
    items: Fruit[];
    isLoading: boolean;
    status: Status;
}