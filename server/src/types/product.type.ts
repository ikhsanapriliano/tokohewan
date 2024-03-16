export interface Product {
    id: string;
    name: string;
    photo: string;
    class: string;
    utility: Utility | null;
    habitat: Habitat | null;
    price: number;
    discount: number;
    free_delivery: boolean;
    rating: number;
    seller_id: string;
    quantity: number;
    sold: number;
}

export interface Utility {
    peliharaan: boolean;
    peternakan: boolean;
    militer: boolean;
    hewan_kurban: boolean;
    material: boolean;
}

export interface Habitat {
    darat: boolean;
    air: boolean;
    udara: boolean;
}

export interface SearchProduct {
    class?: string;
    utility?: Utility;
    habitat?: Habitat;
}
