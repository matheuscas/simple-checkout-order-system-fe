import React, { useState } from 'react';
import {
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonLoading,
  IonSelect,
  IonSelectOption,
  IonToast,
  useIonAlert,
} from '@ionic/react';
import { useMutation } from 'react-query';
import { Item, PaymentCart, submitOrder } from '../services/items';
import { useHistory } from 'react-router';

interface ContainerProps {
  cart: Item[];
  onClearCart: () => void;
}

const CheckoutPaymentForm: React.FC<ContainerProps> = ({
  cart,
  onClearCart,
}: ContainerProps) => {
  const [paymentMode, setPaymentMode] = useState('0');
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [present] = useIonAlert();
  const mutation = useMutation((paymentCart: PaymentCart) =>
    submitOrder(paymentCart),
  );
  const navigation = useHistory();
  const backToHome = () => {
    onClearCart();
    navigation.push('/home');
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setAddress('');
    setPaymentMode('0');
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(name, email, address, paymentMode);
    // just to makes sure
    if (name === undefined || email === undefined || address === undefined) {
      present({
        header: 'Alert',
        message: 'The form must be filled. ',
        buttons: ['Ok'],
      });
    } else {
      // post to API
      mutation.mutate({
        cart: cart,
        payment: {
          name,
          email,
          address,
          payment_mode: parseInt(paymentMode),
        },
      });
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              value={name}
              type="text"
              required
              onIonChange={(e) => setName(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              value={email}
              type="email"
              required
              onIonChange={(e) => setEmail(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Address</IonLabel>
            <IonInput
              value={address}
              type="text"
              required
              onIonChange={(e) => setAddress(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Payment mode</IonLabel>
            <IonSelect
              value={paymentMode}
              placeholder="Select One"
              onIonChange={(e) => setPaymentMode(e.detail.value)}>
              <IonSelectOption value="0">Cash</IonSelectOption>
              <IonSelectOption value="1">Credit Card</IonSelectOption>
              <IonSelectOption value="2">Debit Card</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <IonButton
          color="primary"
          type="submit"
          disabled={mutation.isLoading || mutation.isSuccess}>
          Submit Order
        </IonButton>
      </form>
      <IonLoading isOpen={mutation.isLoading} message={'Please wait...'} />
      <IonToast
        isOpen={mutation.isError}
        message={(mutation.error as any)?.message}
        color="danger"
        duration={200}
        onDidDismiss={() => clearForm()}
      />
      <IonToast
        isOpen={mutation.isSuccess}
        message="Order submitted with success"
        color="success"
        duration={200}
        onDidDismiss={() => backToHome()}
      />
    </>
  );
};

export default CheckoutPaymentForm;
