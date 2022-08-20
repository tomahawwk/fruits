export type SearchParams = {
    category: string;
    search: string;
    order: string;
    sortBy: string;
    currentPage: string;
}

export enum Status {
    LOADING = 'pending',   
    SUCCESS = 'filled',
    ERROR = 'failure'
}

export type Fruit = {
    id: string;
    category: number;
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