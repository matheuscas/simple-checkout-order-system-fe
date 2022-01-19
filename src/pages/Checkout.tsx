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
import CartSummary from '../components/CartSummary';

interface ContainerProps {
  cart: Item[];
}

const Checkout: React.FC<ContainerProps> = ({ cart }: ContainerProps) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/cart" />
          </IonButtons>
          <IonTitle>Checkout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {cart.length === 0 && <h1>No cart, no checkout.</h1>}
        {cart.length > 0 && <CartSummary cart={cart} />}
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
