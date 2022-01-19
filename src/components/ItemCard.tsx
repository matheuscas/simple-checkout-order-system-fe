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

interface AddItemButtonProps {
  item: Item;
  onAddItem: (item: Item) => void;
}

interface RemoveItemButtonProps {
  item: Item;
  onRemoveItem: (item: Item) => void;
}

const AddItemButton: React.FC<AddItemButtonProps> = ({
  item,
  onAddItem,
}: AddItemButtonProps) => (
  <IonButton expand="block" onClick={() => onAddItem(item)}>
    <IonIcon slot="start" icon={cart} />
    Add to cart
  </IonButton>
);

const RemoveItemButton: React.FC<RemoveItemButtonProps> = ({
  item,
  onRemoveItem,
}: RemoveItemButtonProps) => (
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
        {isItemInTheBasket ? (
          <RemoveItemButton item={item} onRemoveItem={onRemoveItem} />
        ) : (
          <AddItemButton item={item} onAddItem={onAddItem} />
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default ItemCard;
