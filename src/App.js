import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import JobListings from './Pages/JobListings';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/PageThree';
import PageFour from './Pages/PageFour';
import PageFive from './Pages/PageFive';
import PageSix from './Pages/PageSix';
import PageSeven from './Pages/PageSeven';
import PageEight from './Pages/PageEight';
import PageNine from './Pages/PageNine';
import PageTen from './Pages/PageTen';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/jobListings" element={<JobListings />} />
        <Route path="/pageTwo" element={<PageTwo />} />
        <Route path="/pageThree" element={<PageThree />} />
        <Route path="/pageFour" element={<PageFour />} />
        <Route path="/pageFive" element={<PageFive />} />
        <Route path="/pageSix" element={<PageSix />} />
        <Route path="/pageSeven" element={<PageSeven />} />
        <Route path="/pageEight" element={<PageEight />} />
        <Route path="/pageNine" element={<PageNine />} />
        <Route path="/pageTen" element={<PageTen />} />
      </Routes>
    </div>
  );
}

export default App;
