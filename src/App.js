import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LandingPage from './landingPage/landingPage';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<LandingPage/>}><LandingPage/></Route>
    // </Routes>
    // </BrowserRouter>
    <LandingPage/>
  );
}

export default App;
