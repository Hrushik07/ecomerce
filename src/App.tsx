import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import MainComponent from './components/MainComponent';
import ProductPage from './components/ProductPage';
import PopularBlogs from './components/PopularBlogs';
import TopSellers from './components/TopSellers';
import FlipkartFooter from './components/common components/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col justify-between ">
        <Router>
          <div className="flex h-screen">
            <Sidebar />
            <div className="rounded w-full flex justify-center flex-wrap m-0">
              <Routes>
                <Route path="/" element={<MainComponent />} />
                <Route path="/products/:id" element={<ProductPage />} />
              </Routes>
              <div>
                <TopSellers />
                <PopularBlogs />
              </div>
            </div>
          </div>
        </Router>
      </div>
      <FlipkartFooter />
    </>
  );
}

export default App
