import { Item } from '../../services/items';
import React from 'react';
import { formatPrice, getCartTotalAmount } from '../../utils';

interface ContainerProps {
  cart: Item[];
}

const CartSummary: React.FC<ContainerProps> = ({ cart }: ContainerProps) => {
  const amount = getCartTotalAmount(cart);
  const summary = cart.map((item) => item.name).join(', ');
  return (
    <div style={{ backgroundColor: 'lightgray', padding: '10px' }}>
      <h2>Review your order:</h2>
      <p>
        {summary} in the total of $ {formatPrice(amount)}
      </p>
    </div>
  );
};

export default CartSummary;
