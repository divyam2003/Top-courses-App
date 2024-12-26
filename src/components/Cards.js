import React, { useState } from 'react'
import Card from './Card';

const Cards = ({courses,category}) => {
    // courses=null
    let allCourses = [];
    const [likedCourses,setLikedCourses] = useState([]);
    // console.log(courses[category]);

    // returns you a list of all courses rx from api resp
    const getCourses =() =>{
        // console.log("printing");
        // console.log(courses);
        if(category === "All"){
            Object.values(courses).forEach( (courseCategory) =>{
                courseCategory.forEach((course) =>{
                    allCourses.push(course);
                })
            })
            return allCourses;
        }else{
            // main sirf specific category ka data array pass karunga 
            return courses[category];
        }
        
    }

    return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {!courses ? 
        (
            <div className='text-3xl font-bold text-center text-white'>
                <p>No data found</p>
            </div>
        ) : 
        (getCourses().map( (course) => {return  <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
          }))
            // getCourses().map( (course) => {
            //     return  <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
            //   })
          }
    </div>
  )
}

export default Cards;