import { IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { Item } from '../../services/items';
import './MenuItems.css';
import ItemCard from '../ItemCard';

interface ContainerProps {
  data: Item[] | undefined;
  basket: Item[];
  onAddItem: (item: Item) => void;
  onRemoveItem: (item: Item) => void;
}

const MenuItems: React.FC<ContainerProps> = ({
  data,
  basket,
  onAddItem,
  onRemoveItem,
}) => {
  return (
    <div>
      {(data === undefined || data.length === 0) && <h1>No items to load.</h1>}
      <IonGrid>
        <IonRow>
          {data?.map((item) => (
            <IonCol key={item.id}>
              <ItemCard
                item={item}
                basket={basket}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
              />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default MenuItems;
