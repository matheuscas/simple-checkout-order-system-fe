import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ItemCard from './ItemCard';

const item = {
  category: 1,
  id: 1,
  image_id: '293202f9d9f7f4',
  name: 'Bagel',
  price: '2.00',
};

test('render the initial state', async () => {
  const props = {
    item: {
      category: 1,
      id: 1,
      image_id: '293202f9d9f7f4',
      name: 'Bagel',
      price: '2.00',
    },
    basket: [],
    onAddItem: jest.fn(),
    onRemoveItem: jest.fn(),
  };
  render(
    <ItemCard
      item={props.item}
      basket={props.basket}
      onAddItem={props.onAddItem}
      onRemoveItem={props.onRemoveItem}
    />,
  );

  await screen.findByText(props.item.name);
  await screen.findByText(`$ ${props.item.price}`);
  await screen.findByText('Add to cart');
  await screen.findByAltText('Item');
});

test('render the remove from cart text button', async () => {
  const props = {
    item,
    basket: [item],
    onAddItem: jest.fn(),
    onRemoveItem: jest.fn(),
  };
  render(
    <ItemCard
      item={props.item}
      basket={props.basket}
      onAddItem={props.onAddItem}
      onRemoveItem={props.onRemoveItem}
    />,
  );

  await screen.findByText(props.item.name);
  await screen.findByText(`$ ${props.item.price}`);
  await screen.findByText('Remove from cart');
  await screen.findByAltText('Item');
});

test('onAddItem is called', async () => {
  const props = {
    item,
    basket: [],
    onAddItem: jest.fn(),
    onRemoveItem: jest.fn(),
  };
  render(
    <ItemCard
      item={props.item}
      basket={props.basket}
      onAddItem={props.onAddItem}
      onRemoveItem={props.onRemoveItem}
    />,
  );

  userEvent.click(screen.getByText('Add to cart'));
  expect(props.onAddItem).toHaveBeenCalled();
});

test('onRemoveItem is called', async () => {
  const props = {
    item,
    basket: [item],
    onAddItem: jest.fn(),
    onRemoveItem: jest.fn(),
  };
  render(
    <ItemCard
      item={props.item}
      basket={props.basket}
      onAddItem={props.onAddItem}
      onRemoveItem={props.onRemoveItem}
    />,
  );

  userEvent.click(screen.getByText('Remove from cart'));
  expect(props.onRemoveItem).toHaveBeenCalled();
});
