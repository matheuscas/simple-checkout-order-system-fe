import axios from 'axios';
import { getCartTotalAmount } from '../utils';

export interface Item {
  category: number;
  id: number;
  image_id: string;
  name: string;
  price: string;
}

export interface Payment {
  name: string;
  email: string;
  address: string;
  payment_mode: number;
}

export interface PaymentCart {
  cart: Item[];
  payment: Payment;
}

async function stall(stallTime = 1000) {
  await new Promise((resolve) => {
    setTimeout(resolve, stallTime);
  });
}

export const getItems = async (): Promise<Item[]> => {
  await stall();
  const response = await axios.get<Item[]>('http://localhost:8000/api/v1/menu');
  return response.data;
};

export const submitOrder = async ({ cart, payment }: PaymentCart) => {
  await stall();
  const total = getCartTotalAmount(cart);
  const items = cart.map((item) => item.id);

  const response = await axios.post('http://localhost:8000/api/v1/order', {
    total,
    items,
    payment,
  });
  return response.data;
};
