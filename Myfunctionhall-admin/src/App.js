import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Index"
import VendorSidebar from "./pages/VendorSidebar";

import Form from "./pages/Form";

import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Sidebar from "./pages/Sidebar";
import Create from './pages/Register/Create';
import Login from "./pages/Register/Login";
import Index from "./pages/Register/Index";
import AddOnCreate from "./pages/Addon/Create";

import AddonIndex from "./pages/Addon/Index";
import AddonEdit from "./pages/Addon/AddOnEdit";

import Addslider from "./pages/Adslider/Addslider";
import Sliderindex from "./pages/Adslider/Sliderindex";
import Editslider from "./pages/Adslider/Editslider";


import AdvertiseAdd from "./pages/Advertise/AdvertiseAdd";
import AdvertiseIndex from "./pages/Advertise/AdvertiseIndex";
import AdvertiseEdit from "./pages/Advertise/AdvertiseEdit";


//Band
import BandAdd from "./pages/Band/BandAdd"
import BandIndex from "./pages/Band/BandIndex"
import BandEdit from "./pages/Band/BandEdit"

//Catering

import CateringAdd from "./pages/Catering/CateringAdd"
import CateringIndex from "./pages/Catering/CateringIndex"
import CateringEdit from "./pages/Catering/CateringEdit"

//Hall

import HallAdd from "./pages/Hall/HallAdd";
import HallIndex from "./pages/Hall/HallIndex";
import EditHall from "./pages/Hall/EditHall";

//Lawn
import LawnAdd from "./pages/Lawn/LawnAdd"
import LawnIndex from "./pages/Lawn/LawnIndex";
import LawnEdit from "./pages/Lawn/LawnEdit";

//Lighting
import LightingAdd from "./pages/Lighting/LightingAdd";
import LightingIndex from "./pages/Lighting/LightingIndex";
import LightingEdit from "./pages/Lighting/LightingEdit";


//Makeup
import MakeupAdd from "./pages/Makeup/MakeupAdd";
import MakeupIndex from "./pages/Makeup/MakeupIndex";
import MakeupEdit from "./pages/Makeup/MakeupEdit";

//Marketing
import MarketingAdd from "./pages/Marketing/MarketingAdd";
import MarketingIndex from "./pages/Marketing/MarketingIndex";
import MarketingEdit from "./pages/Marketing/MarketingEdit";


//photog
import PhotoAdd from "./pages/Photog/PhotoAdd";
import PhotoIndex from "./pages/Photog/PhotoIndex";
import PhotoEdit from "./pages/Photog/PhotoEdit";


//Tag
import TagAdd from "./pages/Tag/TagAdd";
import TagIndex from "./pages/Tag/TagIndex";
import TagEdit from "./pages/Tag/TagEdit";


//Tag
import TentAdd from "./pages/Tent/TentAdd";
import TentIndex from "./pages/Tent/TentIndex";
import TentEdit from "./pages/Tent/TentEdit";

//Video
import VideoAdd from "./pages/Videog/VideoAdd";
import VideoIndex from "./pages/Videog/VideoIndex";
import VideoEdit from "./pages/Videog/VideoEdit";


//Video
import WaterAdd from "./pages/Water/WaterAdd";
import WaterIndex from "./pages/Water/WaterIndex";
import WaterEdit from "./pages/Water/WaterEdit";


import ChefCreate from "./pages/Chef/ChefCreate";
import ChefIndex from "./pages/Chef/ChefIndex";
import ChefEdit from "./pages/Chef/ChefEdit";

import ContactCreate from "./pages/Contact/ContactCreate";
import ContactIndex from "./pages/Contact/ContactIndex";
import ContactEdit from "./pages/Contact/ContactEdit";

import CrackerCreate from "./pages/Cracker/CrackerCreate";
import CrackerIndex from "./pages/Cracker/CrackerIndex";
import CrackerEdit from "./pages/Cracker/CrackerEdit";

import DecorationCreate from "./pages/Decoration/DecorationCreate";
import DecorationIndex from "./pages/Decoration/DecorationIndex";
import DecorationEdit from "./pages/Decoration/DecorationEdit";

import EventmgmtCreate from "./pages/Eventmgmt/EventmgmtCreate";
import EventmgmtIndex from "./pages/Eventmgmt/EventmgmtIndex";
import EventmgmtEdit from "./pages/Eventmgmt/EventmgmtEdit";







import Insert from './pages/Registration/Insert';
// import Form from './pages/Register/Form';
import Bloginsert from './pages/Product/Bloginsert';
import Blog from './pages/Product/Blog';
import Editblog from './pages/Product/Editblog';
import LoginSanctum from './pages/LoginSanctum';

import AddAdmin from './pages/Admin/AddAdmin';
import AdminIndex from "./pages/Admin/AdminIndex";
import Test from "./pages/Test";




import PackageCreate from "./pages/Package/PackageCreate";
import PackageIndex from "./pages/Package/PackageIndex";
import PackageEdit from "./pages/Package/PackageEdit";

import CategoryCreate from "./pages/Category/CategoryCreate";
import CategoryIndex from "./pages/Category/CategoryIndex";
import CategoryEdit from "./pages/Category/CategoryEdit";

import ProfileCreate from "./pages/Profile/ProfileCreate";
import ProfileIndex from "./pages/Profile/ProfileIndex";
import ProfileEdit from "./pages/Profile/ProfileEdit";
import Myprofile from "./pages/Myprofile/Myprofile";
import Crud from "./pages/reducer/Crud";
import ProductForm from "./pages/ProductData/ProductForm";





import ServiceCreate from "./pages/Service/ServiceCreate";
import ServiceEdit from "./pages/Service/ServiceEdit";
import ServicesIndex from "./pages/Service/ServiceIndex";

import ServicevendorsCreate from "./pages/Servicevendors/ServicevendorsCreate";
import ServicesvendorsIndex from "./pages/Servicevendors/ServicevendorsIndex";
import ServicevendorsEdit from "./pages/Servicevendors/ServicevendorsEdit";



import BlogCreate from "./pages/Blog/BlogCreate";
import BlogEdit from "./pages/Blog/BlogEdit";
import BlogIndex from "./pages/Blog/BlogIndex";

import TestimonialCreate from "./pages/Testimonial/TestimonialCreate";
import TestimonialEdit from "./pages/Testimonial/TestimonialEdit";
import TestimonialIndex from "./pages/Testimonial/TestimonialIndex";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />

          <Route path="/test" element={<Test />} />
          <Route path="/vendor" element={<VendorSidebar />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/sidebar" element={<Sidebar />} />

          <Route path="/create" element={<Create />} />
          <Route path="/registertable" element={<Index />} />

          {/* Addon           */}
          <Route path="/addonCreate" element={<AddOnCreate />} />
          <Route path="/addonIndex" element={<AddonIndex />} />
          <Route path="/addonEdit/:id" element={<AddonEdit />} />


          <Route path="/addslider" element={<Addslider />} />
          <Route path="/sliderindex" element={<Sliderindex />} />
          <Route path="/editslider/:id" element={<Editslider />} />


          <Route path="/advertiseAdd" element={<AdvertiseAdd />} />
          <Route path="/advertiseIndex" element={<AdvertiseIndex />} />
          <Route path="/AdvertiseEdit/:id" element={<AdvertiseEdit />} />




          {/* Band           */}
          <Route path="/bandadd" element={<BandAdd />} />
          <Route path="/bandindex" element={<BandIndex />} />
          <Route path="/bandEdit/:id" element={<BandEdit />} />

          {/* //Catering */}

          <Route path="/cateringadd" element={<CateringAdd />} />
          <Route path="/cateringindex" element={<CateringIndex />} />
          <Route path="/cateringEdit/:id" element={<CateringEdit />} />

          {/* Hall */}
          <Route path="/hallAdd" element={<HallAdd />} />
          <Route path="/hallIndex" element={<HallIndex />} />
          <Route path="/editHall/:id" element={<EditHall />} />

          {/* Lawn */}
          <Route path="/lawnadd" element={<LawnAdd />} />
          <Route path="/lawnindex" element={<LawnIndex />} />
          <Route path="/lawnedit/:id" element={<LawnEdit />} />

          {/* Lighting */}
          <Route path="/lightingadd" element={<LightingAdd />} />
          <Route path="/lightingindex" element={<LightingIndex />} />
          <Route path="/lightingedit/:id" element={<LightingEdit />} />


          {/* Makeup */}
          <Route path="/makeupadd" element={<MakeupAdd />} />
          <Route path="/makeupindex" element={<MakeupIndex />} />
          <Route path="/makeupedit/:id" element={<MakeupEdit />} />

          {/* Marketing */}
          <Route path="/marketingadd" element={<MarketingAdd />} />
          <Route path="/marketingindex" element={<MarketingIndex />} />
          <Route path="/marketingedit/:id" element={<MarketingEdit />} />


          {/* Photog */}
          <Route path="/photoadd" element={<PhotoAdd />} />
          <Route path="/photoindex" element={<PhotoIndex />} />
          <Route path="/photoedit/:id" element={<PhotoEdit />} />



          {/* Tag */}
          <Route path="/tagadd" element={<TagAdd />} />
          <Route path="/tagindex" element={<TagIndex />} />
          <Route path="/tagedit/:id" element={<TagEdit />} />



          {/* Tent */}
          <Route path="/tentadd" element={<TentAdd />} />
          <Route path="/tentindex" element={<TentIndex />} />
          <Route path="/tentedit/:id" element={<TentEdit />} />

          {/* Videog */}
          <Route path="/videoadd" element={<VideoAdd />} />
          <Route path="/videoindex" element={<VideoIndex />} />
          <Route path="/videoedit/:id" element={<VideoEdit />} />


          {/* Water */}
          <Route path="/wateradd" element={<WaterAdd />} />
          <Route path="/waterindex" element={<WaterIndex />} />
          <Route path="/wateredit/:id" element={<WaterEdit />} />



          <Route path="/chefcreate" element={<ChefCreate />} />
          <Route path="/chefindex" element={<ChefIndex />} />
          <Route path="/chefedit/:id" element={<ChefEdit />} />

          <Route path="/contactcreate" element={<ContactCreate />} />
          <Route path="/contactindex" element={<ContactIndex />} />
          <Route path="/contactedit/:id" element={<ContactEdit />} />

          <Route path="/crackercreate" element={<CrackerCreate />} />
          <Route path="/crackerindex" element={<CrackerIndex />} />
          <Route path="/crackeredit/:id" element={<CrackerEdit />} />

          <Route path="/decorationcreate" element={<DecorationCreate />} />
          <Route path="/decorationindex" element={<DecorationIndex />} />
          <Route path="/decorationedit/:id" element={<DecorationEdit />} />

          <Route path="/eventmgmtcreate" element={<EventmgmtCreate />} />
          <Route path="/eventmgmtindex" element={<EventmgmtIndex />} />
          <Route path="/eventmgmtedit/:id" element={<EventmgmtEdit />} />





          <Route path="/packagecreate" element={<PackageCreate/>} />
          <Route path="/packageindex" element={<PackageIndex/>} />
          <Route path="/packageedit/:id" element={<PackageEdit />} />

          <Route path="/categorycreate" element={<CategoryCreate/>} />
          <Route path="/categoryindex" element={<CategoryIndex/>} />
          <Route path="/categoryedit/:id" element={<CategoryEdit />} />

          <Route path="/profilecreate" element={<ProfileCreate/>} />
          <Route path="/profileindex" element={<ProfileIndex/>} />
          <Route path="/profileedit/:id" element={<ProfileEdit />} />

          <Route path="/logindata" element={<Login />} />









          <Route path="/registration" element={<Insert />} />
          <Route path="/addadmin" element={<AddAdmin />} />
          <Route path="/adminindex" element={<AdminIndex />} />

      // <Route path="/bloginsert" element={<Bloginsert/>} />
      // <Route path="/blogs" element={<Blog/>} />
      // <Route path="/Editblog/:id" element={<Editblog />} />



      <Route path="/login" element={<LoginSanctum/>} />


      <Route path="/profilecreate" element={<ProfileCreate/>} />
      <Route path="/profile" element={<ProfileIndex/>} />
      <Route path="/profileedit/:id" element={<ProfileEdit/>} />


      <Route path="/categoryreate" element={<CategoryCreate/>} />
      <Route path="/cateory" element={<CategoryIndex/>} />

      <Route path="/cateoryedit/:id" element={<CategoryEdit/>} />

      <Route path="/myprofiledetails" element={<Myprofile/>} />

      <Route path="/cruddata" element={<Crud/>} />


      <Route path="/productdata" element={<ProductForm/>} />









      <Route path="/servicecreate" element={<ServiceCreate/>} />
          <Route path="/serviceindex" element={<ServicesIndex/>} />
          <Route path="/serviceedit/:id" element={<ServiceEdit />} />

          <Route path="/servicevendorscreate" element={<ServicevendorsCreate/>} />
          <Route path="/servicevendorsindex" element={<ServicesvendorsIndex/>} />
          <Route path="/servicevendorsedit/:id" element={<ServicevendorsEdit/>}/>



          <Route path="/blogcreate" element={<BlogCreate/>} />
          <Route path="/blogindex" element={<BlogIndex/>} />
          <Route path="/blogedit/:id" element={<BlogEdit />} />

          <Route path="/testimonialcreate" element={<TestimonialCreate/>} />
          <Route path="/testimonialindex" element={<TestimonialIndex/>} />
          <Route path="/testimonialedit/:id" element={<TestimonialEdit />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
