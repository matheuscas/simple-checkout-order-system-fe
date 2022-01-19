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

interface ContainerProps {
  cartItems: Item[];
  onRemoveItem: (item: Item) => void;
}

const CartItems: React.FC<ContainerProps> = ({
  cartItems,
  onRemoveItem,
}: ContainerProps) => {
  const amount: number = cartItems.reduce((previousValue, currentValue) => {
    return previousValue + parseFloat(currentValue.price);
  }, 0);

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
        <h2>Total: $ {amount.toFixed(2)}</h2>
        <IonButton slot="end" color="success">
          <IonIcon slot="start" icon={cardOutline} />
          Checkout
        </IonButton>
      </IonItem>
    </IonList>
  );
};

export default CartItems;
