import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonIcon,
    IonRow
} from "@ionic/react";
import React from "react";
import { Item } from "../services/items";
import "./MenuItems.css"
import {cart} from "ionicons/icons";

interface ContainerProps {
    data: Item[] | undefined
}


const MenuItems: React.FC<ContainerProps> = ({data}) => {
    return (
        <div>
            {data === undefined && <h1>No items to load.</h1>}
            <IonGrid>
                <IonRow>
                    {data?.map((item) =>
                        <IonCol key={item.id}>
                            <IonCard>
                                <img className="itemImage" src={`./assets/images/${item.image_id}.jpg`} alt="Item"/>
                                <IonCardHeader>
                                    <IonCardSubtitle>$ {item.price}</IonCardSubtitle>
                                    <IonCardTitle>{item.name}</IonCardTitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonButton expand="block">
                                        <IonIcon slot="start" icon={cart} />
                                        Add to cart
                                    </IonButton>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    )}
                </IonRow>
            </IonGrid>

        </div>
    )
}

export default MenuItems