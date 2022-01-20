import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutPaymentForm from './CheckoutPaymentForm';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

const cart = [
  {
    category: 1,
    id: 1,
    image_id: '293202f9d9f7f4',
    name: 'Bagel',
    price: '2.00',
  },
  {
    category: 1,
    id: 2,
    image_id: '808916fd5ddf96',
    name: 'Croissant',
    price: '1.00',
  },
];
const onClearCart = jest.fn();
beforeEach(() => {
  render(
    <QueryClientProvider client={queryClient}>
      <CheckoutPaymentForm cart={cart} onClearCart={onClearCart} />
    </QueryClientProvider>,
  );
});

test('render initial state', async () => {
  await screen.findByLabelText('Name');
  await screen.findByLabelText('Email');
  await screen.findByLabelText('Address');
  await screen.findByPlaceholderText('Select One');
  await screen.findByText('Submit Order');
});
