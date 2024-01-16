import { createRoot } from 'react-dom/client';
import I_User from './components/i_User';
import { PrimeReactProvider } from 'primereact/api';
import {store} from './store/store'
import { Provider } from 'react-redux'


const root = createRoot(document.body);
root.render(
<PrimeReactProvider>
<Provider store={store}>
    <I_User></I_User>
</Provider>
{/*<I_User></I_User>*/}
</PrimeReactProvider>
);