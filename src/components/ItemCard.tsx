import React from "react";
import {Item} from "../services/items";
import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon} from "@ionic/react";
import {cart} from "ionicons/icons";

interface ContainerProps {
    item: Item
}

const ItemCard: React.FC<ContainerProps> = ({item}) => {
    return (
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
    )
}

export default ItemCard

