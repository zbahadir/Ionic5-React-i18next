import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonIcon, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import React from 'react';
import './Home.css';
import { languageOutline } from 'ionicons/icons';
import {useTranslation} from 'react-i18next';
import i18n from '../helpers/i18n';

const Home: React.FC = () => {

const {t} = useTranslation("home");


  return (
     
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('main.title')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonIcon slot="start" icon={languageOutline}></IonIcon>
          <IonLabel position="stacked">{t('selector_title')}</IonLabel>
          <IonSelect value={i18n.language} okText={t('ok')} cancelText={t('dismiss')} onIonChange={e => i18n.changeLanguage(e.detail.value)}>
          <IonSelectOption value="en">{t('english')}</IonSelectOption>
          <IonSelectOption value="tr">{t('turkish')}</IonSelectOption>
          <IonSelectOption value="fr">{t('french')}</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Home;
