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
import { BrowserRouter, Switch, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/pay' component={Pay} />
        <Route path='/fag' component={Faq} />
        <Route path='/coin' component={Coin} />
        <Route path='/profile' component={Profile} />
        <Route path='/project' component={Project} />
        <Route path='/course-detail' component={CourseDetail} />
        <Route path='/team' component={Team} />
        <Route path='/register' component={Register} />
        <Route path='/courses' component={Courses} />
        <Route path='/cooperate' component={Cooperate} />
        <Route><Page404 /></Route>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
