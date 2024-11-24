import { createRoot } from 'react-dom/client';
import I_User from './components/i_User';
import Login from './components/LogIn';
import WeightInfo from './components/WeightInfo';
import { PrimeReactProvider } from 'primereact/api';
import {store} from './store/store';
import { Provider } from 'react-redux';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import LineDemo from './components/Generics/LineDemo';
import LoginPage from './components/Pages/LoginPage';
import Tailwind from 'primereact/passthrough/tailwind';
import { twMerge } from 'tailwind-merge';
import UserGamePage from './components/Pages/UserGamePage';



const root = createRoot(document.body);
root.render(
<PrimeReactProvider value={{ unstyled: false, pt: Tailwind, ptOptions: { mergeSections: true, mergeProps: true } } } >
<Provider store={store}>
    {/*<I_User></I_User>*/}
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login></Login>} />
      <Route path="/create_user" element={<I_User></I_User>} />
      <Route path='/insert_weight' element={<WeightInfo></WeightInfo>}/>
      <Route path='/test' element={<LineDemo></LineDemo>}/>
      <Route path='/main_window' element={<LoginPage></LoginPage>}/>
      <Route path='/user_gamepage' element={<UserGamePage></UserGamePage>}/>
      </Routes>
    </BrowserRouter>
</Provider>
{/*<I_User></I_User>*/}
</PrimeReactProvider>


);