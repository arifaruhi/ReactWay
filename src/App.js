import Header from "./component/header/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/home/Home';
import Footer from "./component/footer/Footer";
function App() {
  return (
    <>
     <BrowserRouter>
        <Header />
        <Routes>
           <Route path='/' element={<Home />}/>
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
