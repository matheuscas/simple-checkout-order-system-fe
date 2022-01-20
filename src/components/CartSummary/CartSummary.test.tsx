import React from 'react';
import { render, screen } from '@testing-library/react';
import CartSummary from './CartSummary';

test('render', async () => {
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
  render(<CartSummary cart={cart} />);
  await screen.findByText('Review your order:');
  await screen.findByText(
    `${cart[0].name}, ${cart[1].name} in the total of $ 3.00`,
  );
});
