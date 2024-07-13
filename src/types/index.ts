export type TProduct = {
  _id: string;
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type TProductUpdated = {
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
};

export type TApiResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct[] | TProduct;
};
