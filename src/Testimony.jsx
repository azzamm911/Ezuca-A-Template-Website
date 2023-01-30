import { useEffect } from "react"
import './css/testimony.css'

export default function Testimony(){

    useEffect(() => {
        const btnOne = document.getElementsByClassName("testimony-btn")[0];
        const btnTwo = document.getElementsByClassName("testimony-btn")[1];
        const btnThree = document.getElementsByClassName("testimony-btn")[2];

        const mobileBtnOne = document.getElementsByClassName("testimony-mobile-btn")[0];
        const mobileBtnTwo = document.getElementsByClassName("testimony-mobile-btn")[1];
        const mobileBtnThree = document.getElementsByClassName("testimony-mobile-btn")[2];

        const imgOne = document.getElementsByClassName("testimony-profile-overlay")[0];
        const imgTwo = document.getElementsByClassName("testimony-profile-overlay")[1];
        const imgThree = document.getElementsByClassName("testimony-profile-overlay")[2];

        const quotesOne = document.getElementsByClassName("testimony-quotes")[0];
        const quotesTwo = document.getElementsByClassName("testimony-quotes")[1];
        const quotesThree = document.getElementsByClassName("testimony-quotes")[2];        

        btnOne.addEventListener("click", ()=>{
            btnOne.style.backgroundColor = "#19C880";
            btnTwo.style.backgroundColor = "white";
            btnThree.style.backgroundColor = "white";

            quotesOne.style.display = "block";
            quotesTwo.style.display = "none";
            quotesThree.style.display = "none";

            if(imgOne.style.display === "block"){
                imgOne.style.display = "none";
                imgTwo.style.display = "block";
                imgThree.style.display = "block";
            }
        })

        btnTwo.addEventListener("click", ()=>{
            btnOne.style.backgroundColor = "white";
            btnTwo.style.backgroundColor = "#19C880";
            btnThree.style.backgroundColor = "white";

            quotesOne.style.display = "none";
            quotesTwo.style.display = "block";
            quotesThree.style.display = "none";

            if(imgTwo.style.display === "block"){
                imgOne.style.display = "block";
                imgTwo.style.display = "none";
                imgThree.style.display = "block";
            }            
        })

        btnThree.addEventListener("click", ()=>{
            btnOne.style.backgroundColor = "white";
            btnTwo.style.backgroundColor = "white";
            btnThree.style.backgroundColor = "#19C880";

            quotesOne.style.display = "none";
            quotesTwo.style.display = "none";
            quotesThree.style.display = "block";

            if(imgThree.style.display === "block"){
                imgOne.style.display = "block";
                imgTwo.style.display = "block";
                imgThree.style.display = "none";
            }            
        })

        // Mobile
        mobileBtnOne.addEventListener("click", ()=>{
            mobileBtnOne.style.backgroundColor = "#19C880";
            mobileBtnTwo.style.backgroundColor = "white";
            mobileBtnThree.style.backgroundColor = "white";

            quotesOne.style.display = "block";
            quotesTwo.style.display = "none";
            quotesThree.style.display = "none";

            document.getElementsByClassName("testimony-profile-mobile-image")[0].src = "https://images.generated.photos/ud_i-xsY5zmqYi9BWKiZ_lCIxcuvGmGN4hZLj-tG-VI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNDg0/ODUwLmpwZw.jpg"            
        })

        mobileBtnTwo.addEventListener("click", ()=>{
            mobileBtnOne.style.backgroundColor = "white";
            mobileBtnTwo.style.backgroundColor = "#19C880";
            mobileBtnThree.style.backgroundColor = "white";

            quotesOne.style.display = "none";
            quotesTwo.style.display = "block";
            quotesThree.style.display = "none";

            document.getElementsByClassName("testimony-profile-mobile-image")[0].src = "https://prowedaward.com/static/fotky/2020/15993798785f5499a699eb5.jpeg"                        
        })

        mobileBtnThree.addEventListener("click", ()=>{
            mobileBtnOne.style.backgroundColor = "white";
            mobileBtnTwo.style.backgroundColor = "white";
            mobileBtnThree.style.backgroundColor = "#19C880";

            quotesOne.style.display = "none";
            quotesTwo.style.display = "none";
            quotesThree.style.display = "block";
            
            document.getElementsByClassName("testimony-profile-mobile-image")[0].src = "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/doe9zax6whtvjzo3gwbl"
        })
    })

    return(
        <div className="testimony d-flex justify-content-center align-items-center my-5 py-5" style={{height: "fit-content"}}>
            <div className="testimony-inner-wrapper row">                
                <div className="testimony-inner-left col-md-6 d-flex flex-column">
                    <div className="testimony-profile-wrapper d-flex flex-row">
                        <div className="testimony-profile d-flex justify-content-center mx-3" style={{width: "100px", height: "100px"}}>
                            <img className="testimony-profile-image rounded-circle" src="https://images.generated.photos/ud_i-xsY5zmqYi9BWKiZ_lCIxcuvGmGN4hZLj-tG-VI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNDg0/ODUwLmpwZw.jpg" style={{width: "100px", height: "100px", zIndex: "-1", position: "absolute"}}></img>
                            <div className="testimony-profile-overlay rounded-circle" style={{backgroundColor: "rgba(225, 225, 225, 0.7)", height: "100px", width: "100px", display: "none"}}></div>
                        </div>
                        <div className="testimony-profile justify-content-center mx-3" style={{width: "100px", height: "100px"}}>
                            <img className="testimony-profile-image rounded-circle" src="https://prowedaward.com/static/fotky/2020/15993798785f5499a699eb5.jpeg" style={{width: "100px", height: "100px", zIndex: "-1", position: "absolute"}}></img>
                            <div className="testimony-profile-overlay rounded-circle" style={{backgroundColor: "rgba(225, 225, 225, 0.7)", height: "100px", width: "100px", display: "block"}}></div>
                        </div>
                        <div className="testimony-profile justify-content-center mx-3" style={{width: "100px", height: "100px"}}>
                            <img className="testimony-profile-image rounded-circle" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/doe9zax6whtvjzo3gwbl" style={{width: "100px", height: "100px", zIndex: "-1", position: "absolute"}}></img>
                            <div className="testimony-profile-overlay rounded-circle" style={{backgroundColor: "rgba(225, 225, 225, 0.7)", height: "100px", width: "100px", display: "block"}}></div>
                        </div>
                    </div>

                    {/* Mobile testimony profile */}
                    <div className="testimony-profile-mobile-wrapper d-flex justify-content-center align-items-center my-5">
                        <div className="testimony-mobile-profile d-flex justify-content-center mx-3" style={{width: "100px", height: "100px"}}>
                            <img className="testimony-profile-mobile-image rounded-circle" src="https://images.generated.photos/ud_i-xsY5zmqYi9BWKiZ_lCIxcuvGmGN4hZLj-tG-VI/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy8wNDg0/ODUwLmpwZw.jpg" style={{width: "100px", height: "100px", zIndex: "-1", position: "absolute"}}></img>
                        </div>                        
                    </div>

                    <div className="testimony-btn-wrapper d-flex justify-content-center mt-5">
                        <button className="testimony-btn border border-success mx-2 rounded-circle" style={{height: "13px", backgroundColor: "#19C880"}}></button>
                        <button className="testimony-btn border border-success mx-2 rounded-circle" style={{height: "13px"}}></button>
                        <button className="testimony-btn border border-success mx-2 rounded-circle" style={{height: "13px"}}></button>
                    </div>
                </div>
                <div className="testimony-inner-right col-md-6 d-flex justify-content-center align-items-center">
                    <div className="testimony-quotes" style={{display: "block"}}>
                        <h5 className="testimony-main-quotes fw-normal">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</h5>
                        <div className="testimony-author-wrapper d-flex flex-row">
                            <div className="testimony-author d-flex justify-content-center align-items-center" style={{height: "50px"}}>
                                <p className="mb-0 text-uppercase" style={{color: "#19C880", fontSize: "20px"}}>ashley greene</p>
                            </div>
                            <div className="testimony-uni d-flex justify-content-center align-items-center" style={{height: "50px"}}>
                                <span className="mx-2">-</span>
                                <p className="mb-0">University in Oxford</p>
                            </div>
                        </div>
                        
                        {/* Mobile */}
                        <div className="testimony-author-mobile-wrapper d-flex flex-column mt-4">
                            <div className="testimony-author-mobile d-flex justify-content-center align-items-center" style={{height: "fit-content"}}>
                                <p className="mb-0 text-uppercase" style={{color: "#19C880", fontSize: "20px"}}>ashley greene</p>
                            </div>
                            <div className="testimony-uni-mobile d-flex justify-content-center align-items-center" style={{height: "fit-content"}}>
                                <p className="mb-0">University in Oxford</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimony-quotes" style={{display: "none"}}>
                        <h5 className="testimony-main-quotes fw-normal">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</h5>
                        <div className="testimony-author-wrapper d-flex flex-row">
                            <div className="testimony-author d-flex justify-content-center align-items-center" style={{height: "50px"}}>
                                <p className="mb-0 text-uppercase" style={{color: "#19C880", fontSize: "20px"}}>rob stephens</p>
                            </div>
                            <div className="testimony-uni d-flex justify-content-center align-items-center" style={{height: "50px"}}>
                                <span className="mx-2">-</span>
                                <p className="mb-0">University in Oxford</p>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="testimony-author-mobile-wrapper d-flex flex-column mt-4">
                            <div className="testimony-author-mobile d-flex justify-content-center align-items-center" style={{height: "fit-content"}}>
                                <p className="mb-0 text-uppercase" style={{color: "#19C880", fontSize: "20px"}}>rob stephens</p>
                            </div>
                            <div className="testimony-uni-mobile d-flex justify-content-center align-items-center" style={{height: "fit-content"}}>
                                <p className="mb-0">University in Oxford</p>
                            </div>
                        </div>
                    </div> 
                    <div className="testimony-quotes" style={{display: "none"}}>
                    <h5 className="testimony-main-quotes fw-normal">Together as teachers, students and universities we can help make this education available for everyone.</h5>
                        <div className="testimony-author-wrapper d-flex flex-row">
                            <div className="testimony-author d-flex justify-content-center align-items-center" style={{height: "50px"}}>
                                <p className="mb-0 text-uppercase" style={{color: "#19C880", fontSize: "20px"}}>jack stafford</p>
                            </div>
                            <div className="testimony-uni d-flex justify-content-center align-items-center" style={{height: "50px"}}>
                                <span className="mx-2">-</span>
                                <p className="mb-0">University in Oxford</p>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="testimony-author-mobile-wrapper d-flex flex-column mt-4">
                            <div className="testimony-author-mobile d-flex justify-content-center align-items-center" style={{height: "fit-content"}}>
                                <p className="mb-0 text-uppercase" style={{color: "#19C880", fontSize: "20px"}}>jack stafford</p>
                            </div>
                            <div className="testimony-uni-mobile d-flex justify-content-center align-items-center" style={{height: "fit-content"}}>
                                <p className="mb-0">University in Oxford</p>
                            </div>
                        </div>
                    </div>        
                </div>

                {/* Mobile testimony button */}
                <div className="testimony-mobile-btn-wrapper d-flex justify-content-center mt-3">
                    <button className="testimony-mobile-btn border border-success mx-2 rounded-circle" style={{height: "13px", backgroundColor: "#19C880"}}></button>
                    <button className="testimony-mobile-btn border border-success mx-2 rounded-circle" style={{height: "13px"}}></button>
                    <button className="testimony-mobile-btn border border-success mx-2 rounded-circle" style={{height: "13px"}}></button>
                </div>               
            </div>
            
        </div>        
    )
}