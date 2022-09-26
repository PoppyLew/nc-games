import {Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Reviews from './components/review-list';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/> 
      <Routes>
      <Route path="/" element={<Reviews/>}></Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
