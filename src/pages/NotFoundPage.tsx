import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';

const NotFoundPage: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Ops, wrong destination.</IonTitle>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">Nothing to find here.</IonContent>
  </IonPage>
);

export default NotFoundPage;
