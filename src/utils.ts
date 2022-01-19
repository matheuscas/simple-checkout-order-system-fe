import { Item } from './services/items';

export function getCartTotalAmount(cartItems: Item[]) {
  return cartItems.reduce((previousValue, currentValue) => {
    return previousValue + parseFloat(currentValue.price);
  }, 0);
}

export function formatPrice(price: number, fractionDigits = 2) {
  return price.toFixed(fractionDigits);
}
