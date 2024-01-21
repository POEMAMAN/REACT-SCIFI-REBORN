
import { Route, Routes } from 'react-router-dom';
import Login from './core/Login/';
import Register from './core/Register';
import Header from './core/Header';
import Home from './core/Home';
import MainPage from './core/MainPage/MainPage';
import AuthRoute from './core/AuthRoutes';
import Footer from './core/Footer';
import MenuBooks from './core/MainPage/MenuBooks/MenuBooks';
import MenuAuthors from './core/MainPage/MenuAuthors/MenuAuthors';
import MenuUniverses from './core/MainPage/MenuUniverse/MenuUniverses';
import MenuAwards from './core/MainPage/MenuAwards/MenuAwards';





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
          <Route path="/main/menuBooks" element={<AuthRoute component={<MenuBooks/>} />} />
          <Route path="/main/menuAuthors" element={<AuthRoute component={<MenuAuthors/>} />} />
          <Route path="/main/menuUniverses" element={<AuthRoute component={<MenuUniverses />} />} />
          <Route path="/main/menuAwards" element={<AuthRoute component={<MenuAwards />} />} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
