import './App.css';
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Cost from "./components/cost/Cost";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Service from "./components/service/Service";
import Signup from "./components/signup/Signup";
import Wallpaper from "./components/wallpaper/Wallpaper";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Cost/>
     <About/>
     <Service/>
     <News/>
     <Wallpaper/>
     <Signup/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
