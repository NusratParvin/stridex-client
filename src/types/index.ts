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
};

export type TApiResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct[];
};
