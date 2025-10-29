import './App.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router basename='/react_user_registration'>
      <Header /> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
    </Router>
  )
}

export default App
