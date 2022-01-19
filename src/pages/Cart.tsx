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
import CartItems from '../components/CartItems';

interface ContainerProps {
  cart: Item[];
}

const Cart: React.FC<ContainerProps> = ({ cart }: ContainerProps) => {
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
        {cart.length > 0 && <CartItems cartItems={cart} />}
      </IonContent>
    </IonPage>
  );
};

export default Cart;
