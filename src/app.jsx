import './styles/app.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';


export function App() {

  return (
    <div>
      <Header></Header>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element ={<SignIn />} />
                  {/*<Route path="/Logement/:id" element ={<Logement />} />
                <Route path="*" element ={<NotFoundPage />} /> */}
            </Routes>

        </Router>
      <Footer></Footer>
    </div>
  )
}
