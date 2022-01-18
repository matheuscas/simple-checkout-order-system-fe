import {
    IonCol,
    IonGrid,
    IonRow
} from "@ionic/react";
import React from "react";
import { Item } from "../services/items";
import "./MenuItems.css"
import ItemCard from "./ItemCard";

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
                            <ItemCard item={item} />
                        </IonCol>
                    )}
                </IonRow>
            </IonGrid>

        </div>
    )
}

export default MenuItems