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
import { closeCircle } from 'ionicons/icons';

interface ContainerProps {
  cartItems: Item[];
}

const CartItems: React.FC<ContainerProps> = ({ cartItems }: ContainerProps) => {
  return (
    <IonList>
      {cartItems.map((item) => (
        <IonItem key={item.id}>
          <IonThumbnail slot="start">
            <IonImg src={`./assets/images/${item.image_id}.jpg`} />
          </IonThumbnail>
          <IonLabel>{item.name}</IonLabel>
          <IonLabel>$ {item.price}</IonLabel>
          <IonButton color="danger">
            <IonIcon slot="icon-only" icon={closeCircle} />
          </IonButton>
        </IonItem>
      ))}
    </IonList>
  );
};

export default CartItems;
