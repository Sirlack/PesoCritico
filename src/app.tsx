import { createRoot } from 'react-dom/client';
import I_User from './components/i_User';
import Login from './components/LogIn';
import WeightInfo from './components/WeightInfo';
import { PrimeReactProvider } from 'primereact/api';
import {store} from './store/store';
import { Provider } from 'react-redux';
import { Route,Routes,BrowserRouter } from 'react-router-dom';




const root = createRoot(document.body);
root.render(
<PrimeReactProvider>
<Provider store={store}>
    {/*<I_User></I_User>*/}
    <BrowserRouter>
      <Routes>
      <Route path="/main_window" element={<I_User></I_User>} />
      <Route path="/test" element={<Login></Login>} />
      <Route path='/iWeight' element={<WeightInfo></WeightInfo>}/>
      </Routes>
    </BrowserRouter>
</Provider>
{/*<I_User></I_User>*/}
</PrimeReactProvider>


);