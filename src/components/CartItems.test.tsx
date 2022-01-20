import React from 'react';
import { render, screen } from '@testing-library/react';
import CartItems from './CartItems';
import { formatPrice, getCartTotalAmount } from '../utils';

test('renders the expected items', async () => {
  const props = {
    data: [
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
    ],
    basket: [],
    onAddItem: jest.fn(),
    onRemoveItem: jest.fn(),
  };
  const amount = getCartTotalAmount(props.data);
  render(<CartItems cart={props.data} onRemoveItem={props.onRemoveItem} />);
  await screen.findByText(props.data[0].name);
  await screen.findByText(`$ ${props.data[0].price}`);

  await screen.findByText(props.data[1].name);
  await screen.findByText(`$ ${props.data[1].price}`);

  await screen.findByText(`Total: $ ${formatPrice(amount)}`);
  const removes = await screen.findAllByText('Remove');
  expect(removes).toHaveLength(props.data.length);
  await screen.findByText('Checkout');
});
