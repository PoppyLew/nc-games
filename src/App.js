import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import Reviews from "./components/review-list";
import ReviewsByCategory from "./components/reviews-by-category";
import { getCategories } from "./utils/api";
import ReviewPage from "./components/review-page";

function App() {
  const [currCategories, setCurrCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories().then((data) => {
      setCurrCategories(data.categories);

      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="App">
      <Header />

      <Nav categories={currCategories} />

      <Routes>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route
          path="/reviews/:category"
          element={<ReviewsByCategory currCategories={currCategories} />}
        ></Route>
        <Route path="/review/:review_id" element={<ReviewPage />}></Route>
        <Route path="*"> 404 page not found</Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
