import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import Filter from './pages/Filter';
import Description from './pages/Desc';
import Slider from './pages/Slider';
import SliderExample from './pages/SliderExample';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Emailex from './pages/Emailex';
import FilterYoutube from './pages/filteryoutube';
import Loginnew from './pages/Loginnew';
import Search from './pages/Search';
import AddressDesc from './pages/AddressDesc';
import MyForm from './pages/MyForm';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDesc from './pages/BlogDesc';
import BlogList from './pages/BlogList';
import Servicedescription  from './pages/Servicedescription';
import JoinVendor from './pages/JoinVendor';
import Testimonial from './pages/Testimonial';
import AllTestimonial from './pages/AllTestimonial';
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/description" element={<Description />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDesc/>} />

          <Route path="/bloglist" element={<BlogList/>} />

          <Route path="/slider" element={<Slider />} />
          <Route path="/sliderexample" element={<SliderExample />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/description/:id' element={<Description/>}/>

          <Route path='/city/:address' element={<AddressDesc/>}/>

          <Route path="/category/:id" element={<Category />} />

          <Route path="/email" element={<Emailex />} />

          <Route path="/samplefilter" element={<FilterYoutube />} />

          <Route path="/loginnew" element={<Loginnew />} />
          <Route path="/search" element={<Search />} />
          <Route path="/according" element={<MyForm />} />
          <Route path="/servicedescription" element={<Servicedescription/>}/>

          <Route path="/joinvendor" element={<JoinVendor/>} />

          <Route path="/alltestimonial/" element={<AllTestimonial />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;






// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./pages/Header";
// import Footer from "./pages/Footer";
// // import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import { ThemeProvider } from "styled-components";
// import { GlobalStyle } from "./pages/GlobalStyle";
// import Halls from "./pages/Halls/Halls";
// import Index from "./pages/Index";

// function App() {
//   const theme = {
//     colors: {
//       heading: "rgb(24 24 29)",
//       text: "rgb(24 24 29)",
//       white: "#fff",
//       black: " #212529",
//       helper: "#8490ff",
//       bg: "rgb(249 249 255)",
//       footer_bg: "#300a35de",
//       btn: "rgb(218 84 243 / 73%)",
//       border: "rgb(218 84 243 / 50%)",
//       hr: "#ffffff",
//       gradient:
//         "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
//       shadow:
//         "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
//       shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
//     },
//     media: { mobile: "768px", tab: "998px" },
//   };

//   return (
//     <>
//       <ThemeProvider theme={theme}>
//       <GlobalStyle />
//         <BrowserRouter>
//           <Header/>
//             <Routes>
//               <Route path="/" element={<Index/>}/>

//               <Route path="/about" element={<About/>}/>
//               <Route path="/services" element={<Services/>}/>
//               <Route path="/contact" element={<Contact/>}/>
//               <Route path="/halls" element={<Halls/>}/>
//             </Routes>
//           <Footer/>
//         </BrowserRouter>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;
