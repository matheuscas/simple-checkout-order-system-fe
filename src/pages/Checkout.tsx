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
import CartSummary from '../components/CartSummary/CartSummary';
import CheckoutPaymentForm from '../components/CheckoutPaymentForm/CheckoutPaymentForm';

interface ContainerProps {
  cart: Item[];
  onClearCart: () => void;
}

const Checkout: React.FC<ContainerProps> = ({
  cart,
  onClearCart,
}: ContainerProps) => {
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
        {cart.length > 0 && (
          <>
            <CartSummary cart={cart} />
            <CheckoutPaymentForm cart={cart} onClearCart={onClearCart} />
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
