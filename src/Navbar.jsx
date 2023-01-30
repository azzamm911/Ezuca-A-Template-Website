import './css/navbar.css'
export default function Navbar(){

    return(
        <div className="d-flex flex-column w-100" style={{top: "0", left: "0",position: "absolute", zIndex: "2"}}>

            {/* Top navbar */}
            <nav className="top-navbar navbar navbar-expand-lg bg-light border-bottom px-5 py-0" style={{height: "fit-content"}}>
                
                {/* Responsive top navbar */}
                <div className="top-navbar-action-resp d-flex justify-content-center w-100" style={{display: "none"}}>
                        <form className="d-flex flex-row justify-content-center align-items-center" role="search">
                            <input className="form-control border-0 rounded-0" type="search" placeholder="What would you like to learn!" aria-label="Search" style={{background: "#F3F3F3"}}/>
                            <button className="btn btn-outline-success rounded-0 border-0 bg-success text-white" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                        </form>
                </div>
                
                <div className="container-fluid me-0 pe-0 w-100 row">
                    <div className="top-navbar-contact col-6 row">
                        <div className="col-7 d-flex justify-content-center align-items-center border-end py-2">
                            <a className="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16" style={{color: "#19C880"}}>
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>ezuca@edu.com
                            </a>
                        </div>
                        <div className="col-5 py-2 d-flex align-items-center">
                            <p className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-2" viewBox="0 0 16 16" style={{color: "#19C880"}}>
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>001-1234-8888
                            </p>
                        </div>
                    </div>
                    <div className="top-navbar-action col-6 row pe-0">
                        <div className="col-8">
                            <form className="d-flex flex-row justify-content-center align-items-center" role="search">
                                <input className="form-control border-0 rounded-0" type="search" placeholder="What would you like to learn!" aria-label="Search" style={{background: "#F3F3F3"}}/>
                                <button className="btn btn-outline-success rounded-0 border-0 text-white" type="submit" style={{background: "#19C880"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className="col-4 row">
                            <div className="col-7 d-flex justify-content-center align-items-center border-end">
                                <a className="nav-link mx-1">Register</a>
                            </div>
                            <div className="col-5 d-flex justify-content-center align-items-center">
                                <a className="nav-link mx-1">Login</a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </nav>
            
            {/* Bottom navbar */}
            <nav className="bottom-navbar navbar navbar-expand-lg bg-white px-5" style={{height: "fit-content"}}>
                <div className="container-fluid p-0">
                    <div className="bottom-navbar-left d-flex w-100">
                        <h1 className="ms-5 me-auto"><a className="navbar-brand mx-5" href="#" style={{fontSize: "50px"}}>Ezu<span style={{color: "#19C880"}}>ca</span></a></h1>
                        
                        {/* Responsive button */}
                        <button className="navbar-toggler my-auto text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="bottom-navbar-right offcanvas offcanvas-start pe-5 w-25" data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item px-3">
                                <a className="nav-link d-inline-block" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link d-inline-block" href="#">ABOUT</a>
                            </li>                
                            <li className="nav-item px-3">
                                <a className="nav-link d-inline-block" href="#">COURSES</a>
                            </li>
                            <li className="nav-item px-3">
                                <a className="nav-link d-inline-block" href="#">BLOG</a>
                            </li> 
                            <li className="nav-item px-3">
                                <a className="nav-link d-inline-block" href="#">CONTACT</a>
                            </li>
                            <li className="nav-item-account nav-item border-top pt-2 px-3" style={{display: "none"}}>
                                <a className="nav-link d-inline-block" href="#">REGISTER</a>
                            </li>
                            <li className="nav-item-account nav-item px-3" style={{display: "none"}}>
                                <a className="nav-link d-inline-block" href="#">LOGIN</a>
                            </li>
                        </ul>            
                    </div>
                </div>
            </nav>
        </div>        
    )
}