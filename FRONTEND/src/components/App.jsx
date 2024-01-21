
import { Route, Routes } from 'react-router-dom';
import Login from './core/Login/';
import Register from './core/Register';
import Header from './core/Header';
import Home from './core/Home';
import MainPage from './core/MainPage/MainPage';
import AuthRoute from './core/AuthRoutes';
import Footer from './core/Footer';
import MenuBooks from './core/MainPage/ListPages/Books/MenuBooks';
import MenuAuthors from './core/MainPage/ListPages/Authors/MenuAuthors';
import MenuUniverses from './core/MainPage/ListPages/Universes/MenuUniverses';



const App = () => {

  return (
    <>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/main" element={<AuthRoute component={<MainPage />} />} />
          <Route path="/main/menuBooks" element={<AuthRoute component={<MenuBooks />} />} />
          <Route path="/main/menuAuthors" element={<AuthRoute component={<MenuAuthors />} />} />
          <Route path="/main/menuUniverses" element={<AuthRoute component={<MenuUniverses />} />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
