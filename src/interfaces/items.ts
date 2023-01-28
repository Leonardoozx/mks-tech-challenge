export interface ItemsPayload {
  page: number;
  rows: number;
  sortBy: 'id' | 'name' | 'brand' | 'description' | 'price' | 'createdAt';
  orderBy: 'ASC' | 'DESC';
}

export interface Items {
  id: number;
  brand: string;
  description: string;
  name: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ItemsInitialState {
  stockItems: Items[];
  itemsInTheCart: Items[];
}

export interface ItemsApiResponse {
  count: number;
  products: Items[];
}
