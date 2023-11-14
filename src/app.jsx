import './styles/app.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import User from './pages/User';
import {store } from './store.js'
import { Provider } from 'react-redux'

{/* */}

export function App() {

  return (
    <div>
      <Provider store={store}>
        <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Login" element ={<SignIn />} />
                  <Route path="/User" element ={<User />} />
              </Routes>
          </Router>
        <Footer />
      </Provider> 
    </div>
  )
}
