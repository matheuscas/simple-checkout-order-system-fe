import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuItems from './MenuItems';

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
  render(
    <MenuItems
      data={props.data}
      basket={props.basket}
      onAddItem={props.onAddItem}
      onRemoveItem={props.onRemoveItem}
    />,
  );
  await screen.getByText(props.data[0].name);
  await screen.getByText(props.data[1].name);
});

test('renders empty message when there are no items', async () => {
  const props = {
    data: [],
    basket: [],
    onAddItem: jest.fn(),
    onRemoveItem: jest.fn(),
  };
  render(
    <MenuItems
      data={props.data}
      basket={props.basket}
      onAddItem={props.onAddItem}
      onRemoveItem={props.onRemoveItem}
    />,
  );
  await screen.getByText('No items to load.');
});
