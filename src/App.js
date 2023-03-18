import './App.css';

import Home from './components/home/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import Register from './components/Account/register';
import UserAccount from './components/Account/login';
import RecordList from './components/record/records';
import RecordDetail from './components/record/record_detail';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className='main'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home></Home>} />
          <Route path="login" element={<UserAccount title ="LOG IN" type = 'login'></UserAccount>}/>
          <Route path="register" element={<Register></Register>} />
          <Route path="dashboard" element={<RecordList></RecordList>} />
          <Route path="record" element={<RecordDetail></RecordDetail>} />
          <Route path="myProfile" element={<Profile></Profile>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
