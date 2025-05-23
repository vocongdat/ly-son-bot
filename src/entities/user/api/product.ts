import axios from 'axios';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get('/api/products');
  return response.data;
};
