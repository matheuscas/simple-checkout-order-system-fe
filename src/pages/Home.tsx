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
    IonToolbar
} from '@ionic/react';
import './Home.css';
import getItems from "../services/items";
import { Item } from "../services/items";
import {useQuery} from "react-query";
import MenuItems from "../components/MenuItems";
import {cart} from "ionicons/icons";

const Home: React.FC = () => {
    const { isLoading, isError, data, error } =  useQuery<Item[]>('items', getItems)
    return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
            <IonTitle>Menu</IonTitle>
            <IonButtons slot="end">
                <IonButton className="cartButton">
                    <IonIcon slot="icon-only" icon={cart} />
                    <IonBadge className="itemsBadge" color="danger">6</IonBadge>
                </IonButton>
            </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
              <IonLoading
                  isOpen={isLoading}
                  message={'Please wait...'}
              />
              {!isLoading && <MenuItems data={data}/>}
          </IonContent>
        </IonPage>
    );
};

export default Home;
