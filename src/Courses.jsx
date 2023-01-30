import './css/courses.css'
import CoursesCard from './CoursesCard'
import { useState } from 'react';
import { courses } from './sampledata/courses'

export default function Courses(){

    var tempArray = [];

    // Sort the data based on rating (descending) and reduce the data for displaying purposes
    var newCourses = courses.sort((a,b) => (b.rating > a.rating) ? 1 : ((a.rating > b.rating) ? -1 : 0));

    if(courses.length >= 6){
        newCourses.slice(0, 6);
    }

    // Render default data
    var coursesAllData = courses.map(data =>{
        return(
            <CoursesCard 
                key = {data.id}
                newData  = {data}
            />
        )
    })

    var [coursesData, setCourses] = useState(coursesAllData);

    // ============================================================================================================== \\

    // Render responsive data
    var trimArray = (target) => {
        tempArray = newCourses.filter(course => {
            return course.tag === target
        })
    }

    var courseCheck = (target) => {
        switch(target){
            case 1:
                setCourses(prevCourse => {
                    return prevCourse = newCourses.map(data => {
                        return(
                            <CoursesCard 
                                key = {data.id}
                                newData  = {data}
                            />
                        )
                    })
                })
                break;

            case 2:
                trimArray("bus");
                setCourses((prevCourse) => {
                    return prevCourse = tempArray.map(data => {
                        return(
                            <CoursesCard 
                                key = {data.id}
                                newData = {data}
                            />
                        )
                    })
                })
                break;

            case 3:
                trimArray("des");
                setCourses(prevCourse => {
                    return prevCourse = tempArray.map(data => {
                        return(
                            <CoursesCard 
                                key = {data.id}
                                newData = {data}
                            />
                        )
                    })
                })
                break;

            case 4:
                trimArray("dev");
                setCourses(prevCourse => {
                    return prevCourse = tempArray.map(data => {
                        return(
                            <CoursesCard 
                                key = {data.id}
                                newData = {data}
                            />
                        )
                    })
                })
                break;

            case 5:
                trimArray("pho");
                setCourses(prevCourse => {
                    return prevCourse = tempArray.map(data => {
                        return(
                            <CoursesCard 
                                key = {data.id}
                                newData = {data}
                            />
                        )
                    })
                })
                break;
        }
    }
    // ============================================================================================================== \\

    return(
        <div className="courses d-flex justify-content-center align-items-center py-5" style={{height: "fit-content"}}>
            <div className="courses-inner-wrapper d-flex flex-column w-75 my-5" style={{height: "fit-content"}}>
                <div className="courses-header-wrapper d-flex flex-row">
                    <div className="courses-header-left d-flex flex-grow-1 align-items-center">
                        <h1 className="fw-normal d-flex">Feature Courses</h1>
                    </div>
                    <div className="courses-header-right d-flex align-items-center">                                             
                        <ul className="courses-header-list d-flex flex-row mb-0">
                            <li className="nav-link mx-3" onClick={()=> courseCheck(1)} >All</li>
                            <li className="nav-link mx-3" onClick={()=> courseCheck(2)} >Business</li>
                            <li className="nav-link mx-3" onClick={()=> courseCheck(3)} >Design</li>
                            <li className="nav-link mx-3" onClick={()=> courseCheck(4)} >Web Development</li>
                            <li className="nav-link mx-3" onClick={()=> courseCheck(5)} >Photography</li>
                        </ul>
                    </div>
                </div>
                <div className="courses-main-content-wrapper row mb-5" style={{height: "80%"}}> 
                    {coursesData}                                    
                </div>
                <div className='courses-btn-wrapper d-flex justify-content-center' style={{height: "fit-content"}}>
                    <button type="button" className="courses-btn btn btn-outline-success rounded-0 text-black w-25" style={{height: "60px"}}><p className='btn-text fw-bold text-uppercase mb-0' style={{fontSize: "13px", letterSpacing: "2px"}}>view all courses</p></button>
                </div>            
            </div>
        </div>
    )
}