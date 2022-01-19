import React from 'react';
import { Item } from '../services/items';
import {
  IonButton,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
} from '@ionic/react';
import { cardOutline, closeCircle } from 'ionicons/icons';
import { formatPrice, getCartTotalAmount } from '../utils';

interface ContainerProps {
  cartItems: Item[];
  onRemoveItem: (item: Item) => void;
}

const CartItems: React.FC<ContainerProps> = ({
  cartItems,
  onRemoveItem,
}: ContainerProps) => {
  const amount = getCartTotalAmount(cartItems);
  return (
    <IonList>
      {cartItems.map((item) => (
        <IonItem key={item.id}>
          <IonThumbnail slot="start">
            <IonImg src={`./assets/images/${item.image_id}.jpg`} />
          </IonThumbnail>
          <IonLabel>{item.name}</IonLabel>
          <IonLabel>$ {item.price}</IonLabel>
          <IonButton color="danger" onClick={() => onRemoveItem(item)}>
            <IonIcon slot="icon-only" icon={closeCircle} />
          </IonButton>
        </IonItem>
      ))}
      <IonItem lines="none">
        <h2>Total: $ {formatPrice(amount)}</h2>
        <IonButton slot="end" color="success" routerLink="/checkout">
          <IonIcon slot="start" icon={cardOutline} />
          Checkout
        </IonButton>
      </IonItem>
    </IonList>
  );
};

export default CartItems;
