import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';
// import {Translation} from 'react-i18next';

// import i18n from 'react-i18next';
import {useTranslation} from 'react-i18next';
// import i18next, { i18n } from 'i18next';


const Home: React.FC = () => {

const {t} = useTranslation("home");



  // i18next.changeLanguage('en-EN');
  //const {t} = useTranslation();

  
  /*
  const allowedLanguages = ['en', 'tr'];

  const defaultLng = 'en';
  let lng = defaultLng;
*/
/*
{t('search.clients')}
*/
  return (
    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{t('zafer')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
