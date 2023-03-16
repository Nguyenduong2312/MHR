import './App.css';
import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Register from './components/Account/register';
import UserAccount from './components/Account/login';
function App() {
  return (
    <div className='main'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home></Home>} />
          <Route path="login" element={<UserAccount title ="LOG IN" type = 'login'></UserAccount>}/>
          <Route path="register" element={<Register></Register>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
