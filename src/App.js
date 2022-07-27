import React, { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";

import "./App.css";

const App = () => {

  const [loading,setLoading]  =useState(false);

    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
      },1550);
    },[])

  const [resumeData, setResumeData] = useState({});

useEffect( () => {
       fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    

    <div className="App">
      {
        loading ?<div className="react-preloader-tj">
          <HashLoader color={"#9B9B9B"} loading={loading}  size={150} />
        </div>
        
        
        :
      <div><Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
      </div>
      
      }
    </div>
  );
};

export default App;
