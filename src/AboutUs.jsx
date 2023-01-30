import './css/about-us.css'
import { useEffect } from 'react';

export default function AboutUs(){

    useEffect(() => {

        const vidOverlay = document.getElementsByClassName("video-overlay")[0];
        const vid = document.getElementsByClassName("tour-vid")[0];
        const btnPause = document.getElementsByClassName("btn-pause")[0];

        vidOverlay.addEventListener("mouseover", () => {
            if(btnPause.style.display === "none"){
                btnPause.style.display = "block"

                if(vid.paused){
                    vid.play();
                }
                else {
                    vid.pause();
                }
            }

        })

        vidOverlay.addEventListener("mouseout", () => {
            if(btnPause.style.display === "block"){
                btnPause.style.display = "none"

                if(vid.paused){
                    vid.play();
                }
                else {
                    vid.pause();
                }
            }
        })

        vidOverlay.addEventListener("click", () => {
            if(vid.paused){
                vid.play();
            }
            else {
                vid.pause();
            }
        })
        
    })   

    return(
        <div className="about-us mt-5 p-5" style={{height: "fit-content", background: "#F7F7F7"}}>            
            <div className="about-us-inner-wrapper row px-5" style={{height: "fit-content"}}>
                <div className="about-us-inner-left col-md-6 d-flex flex-column">
                    <div className="about-us-inner-left-top">
                        <h1 className="fw-normal">About Ezuca</h1>
                        <p className="my-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                    </div>
                    <div className="about-us-inner-left-bottom row">
                        <div className="about-us-stats col-md-6">
                            <h2 className='display-6 fw-normal mb-0'>50<span className='fs-3'>M+</span></h2>
                            <p>STUDENTS LEARNING</p>
                        </div>
                        <div className="about-us-stats col-md-6">
                            <h2 className='display-6 fw-normal mb-0'>50<span className='fs-3'>K+</span></h2>
                            <p>ACTIVE COURSES</p>
                        </div>
                        <div className="about-us-stats col-md-6">
                            <h2 className='display-6 fw-normal mb-0'>340<span className='fs-3'>M+</span></h2>
                            <p>INSTRUCTORS ONLINE</p>
                        </div>
                        <div className="about-us-stats col-md-6">
                            <h2 className='display-6 fw-normal mb-0'>20<span className='fs-3'>+</span></h2>
                            <p>COUNTRY REACHED</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-md-6">
                    <div className='video-overlay d-flex justify-content-center align-items-center h-100 w-100' style={{zIndex: "2", position: "relative"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-play-circle btn-pause" viewBox="0 0 16 16" style={{zIndex: "2", display: "none"}}>
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                        </svg>
                        <video className='tour-vid' width="100%" height="100%" muted loop style={{zIndex: "0", position: "absolute"}}>
                            <source src="src/vid/tour.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>                
                    </div>                    
                </div>
            </div>
        </div>
    )
}