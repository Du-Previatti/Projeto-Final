export interface ICategory{
    id: string;
    name: string;
}

export interface IProduct {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    categoryId: number;
    categories: ICategory[];
}