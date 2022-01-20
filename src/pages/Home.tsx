import React from 'react';
import {
  IonBadge,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLoading,
  IonPage,
  IonTitle,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import './Home.css';
import { getItems } from '../services/items';
import { Item } from '../services/items';
import { useQuery } from 'react-query';
import MenuItems from '../components/MenuItems';
import { cart } from 'ionicons/icons';

interface ContainerProps {
  basket: Item[];
  onAddItem: (item: Item) => void;
  onRemoveItem: (item: Item) => void;
}

const Home: React.FC<ContainerProps> = ({
  basket,
  onAddItem,
  onRemoveItem,
}) => {
  const { isLoading, isError, data, error } = useQuery<Item[]>(
    'items',
    getItems,
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
          <IonButtons slot="end">
            <IonButton className="cartButton" routerLink="/cart">
              <IonIcon slot="icon-only" icon={cart} />
              <IonBadge className="itemsBadge" color="danger">
                {basket.length}
              </IonBadge>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading isOpen={isLoading} message={'Please wait...'} />
        <IonToast
          isOpen={isError}
          message={(error as any)?.message}
          duration={200}
        />
        {!isLoading && !isError && (
          <MenuItems
            data={data}
            basket={basket}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
