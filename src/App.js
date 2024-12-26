import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {filterData,apiUrl} from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses,setCourses] = useState(null); // null will cause problem so we can use empty array []; i have taken care of null using spinner as well as in Cards return section.
  const [loading,setLoading] =useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  // handling when api call is not rx
  const [apival,setApival] = useState(true);

  useEffect( () =>{
    const fetchData = async() => {
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data into a varaible
        console.log("Checking the data value");
        console.log(output)
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong");
        setApival(false);
        
      }
      setLoading(false);
    }
    fetchData();
  },[]);

  return (
    <div>
    {
      !apival ? (
      <div className="bg-black w-full min-h-screen flex justify-center items-center">
        <div className="text-4xl font-bold text-center text-white">
          404
        </div>
        <div className="text-2xl font-bold text-center text-white ml-8"> API can't fetch the data.</div>
      </div>
      ) : 
      (
        <div className="min-h-screen flex flex-col bg-bgDark2 ">
          <div>
            <Navbar/>
          </div>
          <div className="">
            <div>
            <Filter
              filterData={filterData}
              category={category}
              setCategory={setCategory}
            />
            </div>
            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              {
                loading ? (<Spinner/>) : (<Cards courses={courses} category={category} />)
              }
            </div>
          </div>
          
        </div>
      )
    }
    </div>
  );
};

export default App;
