import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { Item } from './services/items';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

setupIonicReact();

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [cart, setCart] = useState<Item[]>([]);
  const onAddItem = (item: Item) => {
    setCart((prev) => {
      return [...prev, item];
    });
  };

  const onRemoveItem = (item: Item) => {
    setCart((prev) => {
      return prev.filter((_item) => _item.id !== item.id);
    });
  };
  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home
                basket={cart}
                onAddItem={onAddItem}
                onRemoveItem={onRemoveItem}
              />
            </Route>
            <Route path="/cart">
              <Cart cart={cart} onRemoveItem={onRemoveItem} />
            </Route>
            <Route path="/checkout">
              <Checkout cart={cart} />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    </QueryClientProvider>
  );
};

export default App;
