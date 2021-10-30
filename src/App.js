import { Header, Footer } from './components'
import Faq from './pages/Faq';
import Home from './pages/Home'
import Page404 from "./pages/Page404";
import Pay from "./pages/Pay";
import Register from "./pages/Register";
import Coin from "./pages/Coin";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import CourseDetail from "./pages/CourseDetail";
import Team from "./pages/Team";
import Courses from "./pages/Courses";
import Cooperate from "./pages/Cooperate";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createContext, useState } from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginModal from './LoginModal';
import PrivateRouter from './PrivateRouter';
import authApi from './services/authServices'
import api from './services/config';
export const MainContext = createContext();

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('login')))
  const [openLogin, setOpenLogin] = useState(true)

  const togglePopupLogin = (flag) => {
    if (typeof flag === 'undefined') {
      setOpenLogin(!openLogin)
    }
    else { setOpenLogin(flag) }
  }

  const login = async (user) => {

    let res = await authApi.login(user)
    // authApi.login(user).then(res => {
    //   if (res.data) {
    //     setUser(res.data)
    //     localStorage.setItem('login', JSON.stringify(res.data))
    //   }
    // })
    //   //luu localstorage
    if (res.data) {
      setUser(res.data)
      localStorage.setItem('login', JSON.stringify(res.data))
    }
  }

  const logout = () => {
    setUser(null);
    localStorage.removeItem('login')
  }
  return (
    <BrowserRouter>
      <MainContext.Provider value={{ user, login, logout, togglePopupLogin, openLogin, setOpenLogin }}>
        <Header />
        {!user && <LoginModal />}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pay' component={Pay} />
          <Route path='/fag' component={Faq} />
          <Route path='/coin' component={Coin} />
          <PrivateRouter path='/profile' component={Profile} />
          <Route path='/project' component={Project} />
          <Route path='/course-detail' component={CourseDetail} />
          <Route path='/team' component={Team} />
          <Route path='/register' component={Register} />
          <Route path='/courses' component={Courses} />
          <Route path='/cooperate' component={Cooperate} />
          <Route><Page404 /></Route>

        </Switch>
        <Footer />
      </MainContext.Provider>
    </BrowserRouter>
  );
}

export default App;



const a = new Promise((res, rej) => {
  return rej('error')
})

a.then(res => console.log(res)).catch(error => console.log(error))
// fetch()
//   .then(res => res.json())
//   .then(res => res.)