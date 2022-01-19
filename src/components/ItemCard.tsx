import React from 'react';
import { Item } from '../services/items';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';
import { cart, closeCircle } from 'ionicons/icons';

interface ContainerProps {
  item: Item;
  basket: Item[];
  onAddItem: (item: Item) => void;
  onRemoveItem: (item: Item) => void;
}

const addItemButton = (item: Item, onAddItem: (item: Item) => void) => (
  <IonButton expand="block" onClick={() => onAddItem(item)}>
    <IonIcon slot="start" icon={cart} />
    Add to cart
  </IonButton>
);

const removeItemButton = (item: Item, onRemoveItem: (item: Item) => void) => (
  <IonButton color="danger" expand="block" onClick={() => onRemoveItem(item)}>
    <IonIcon slot="start" icon={closeCircle} />
    Remove from cart
  </IonButton>
);

const ItemCard: React.FC<ContainerProps> = ({
  item,
  basket,
  onAddItem,
  onRemoveItem,
}) => {
  const isItemInTheBasket =
    basket.find((_item) => _item.id === item.id) !== undefined;
  return (
    <IonCard>
      <img
        className="itemImage"
        src={`./assets/images/${item.image_id}.jpg`}
        alt="Item"
      />
      <IonCardHeader>
        <IonCardSubtitle>$ {item.price}</IonCardSubtitle>
        <IonCardTitle>{item.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {isItemInTheBasket
          ? removeItemButton(item, onRemoveItem)
          : addItemButton(item, onAddItem)}
      </IonCardContent>
    </IonCard>
  );
};

export default ItemCard;
