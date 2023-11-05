import './styles/app.css'
import Home from './pages/Home'
import SignIn from './pages/SignIn';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import User from './pages/User';

export function App() {

  return (
    <div>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element ={<SignIn />} />
                <Route path="/User" element ={<User />} />

                {/*<<Route path="/Logement/:id" element ={<Logement />} />
                Route path="*" element ={<NotFoundPage />} /> */}
            </Routes>

        </Router>
      <Footer></Footer>
    </div>
  )
}
