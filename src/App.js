import './App.css';
import DanhSachPage from './containers/HomeTemplate/DanhSachDonHang';
import HomePage from './containers/HomeTemplate/HomePage';

import QuanLyPage from './containers/HomeTemplate/QuanLyTaiKhoan';
import SanPhamPage from './containers/HomeTemplate/SanPham';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './containers/PageNotFound';
import Navbar from './containers/HomeTemplate/_components/Navbar';
import DetailDonHangPage from './containers/HomeTemplate/DetailDonHang';

import { useEffect } from 'react';

function App() {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch('http://localhost:3000/');
  //       console.log(res.json());

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  // });
  
  return (
    
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ HomePage } />

        <Route path='/san-pham' component={ SanPhamPage  } />

        <Route path='/quan-ly' component={ QuanLyPage } />

        <Route path='/danh-sach' component={ DanhSachPage  } />

        <Route path='/detail/:id' component={ DetailDonHangPage} />

        <Route path='*' component={ PageNotFound } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
