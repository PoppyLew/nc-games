import {Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Reviews from './components/review-list';
import ReviewsByCategory from './components/reviews-by-category';


function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/> 
      <Routes>
      <Route path="/reviews" element={<Reviews/>}></Route>
      <Route path="/reviews/:category" element={<ReviewsByCategory/>}></Route>
      <Route path="*" > 404 page not found</Route>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
