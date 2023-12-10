interface Review {
    customer: string,
    review: string,
    score: number,
}

export interface Sale {
    [key: string]: string | number;
    // weekEnding: string,
    // weekEndingAsNumber?: number,
    // retailSales: number,
    // wholesaleSales: number,
    // unitsSold: number,
    // retailerMargin: number,
}
export interface Product {
    id: string,
    title: string,
    image: string,
    subtitle: string,
    brand: string,
    reviews: Review[],
    retailer: string,
    details: string[],
    tags: string[],
    sales: Sale[]
}
type product_data = Product[]

export default product_data