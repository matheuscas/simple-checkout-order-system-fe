import React from 'react';
import { Item } from '../services/items';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import CartItems from '../components/CartItems/CartItems';

export interface ContainerProps {
  cart: Item[];
  onRemoveItem: (item: Item) => void;
}

const Cart: React.FC<ContainerProps> = ({
  cart,
  onRemoveItem,
}: ContainerProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Cart Items</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {cart.length === 0 && <h1>No cart items.</h1>}
        {cart.length > 0 && (
          <CartItems cart={cart} onRemoveItem={onRemoveItem} />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Cart;
