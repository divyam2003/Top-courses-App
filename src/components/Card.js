import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = ({course,likedCourses,setLikedCourses}) => {

  function clickHandler(){
    // logic
    if(likedCourses.includes(course.id)) {
      // phele se liked hain yeh course
      setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id))); 
      toast.warning("Like removed");
    }else{
      // phele se liked nahi hain toh insert karna hain
      if(likedCourses.lenght===0) setLikedCourses([course.id]);
      else{
        // non emtpy
        setLikedCourses( (prev) => [...prev,course.id]);
      }
      toast.success("Liked Successfully");

    }
  }

  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'> 
        <div className='relative'>
            <img src={course.image.url} alt='' ></img>
             <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[0] grid place-items-center'> 
                <button onClick={clickHandler}>
                    {
                      !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>) : (<FcLike fontSize="1.75rem"/>) 
                    }
                </button>
             </div>
        </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
              {
                course.description.lenght>100 ? (course.description.substr(0,100)) + "..." : (course.description)
                // course.description.substr(0,100)
              }
            </p>
        </div>

    </div>
  )
}

export default Card;

