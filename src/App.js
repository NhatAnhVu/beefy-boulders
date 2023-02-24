import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
import ClassesAndEvents from './pages/Classes&Events/ClassesAndEvents';
import Contant from './pages/Contact';
import Account from './pages/Account/Account';
import Error from './pages/Error';
import Signup from './pages/Account/Signup';
import Login from './pages/Account/Login';
import PrivateRoutes from './components/PrivateRoutes';

function App() {

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/classesevents' element={<ClassesAndEvents />} />
          <Route path='/contact' element={<Contant />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/account' element={<Account />} />
          </Route>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
