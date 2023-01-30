function FeaturedNewsCard(props){

    var date_begin = String(props.news.date_begin).slice(4, 10);
    var date_end = String(props.news.date_end).slice(4, 10);

    return(
        <div className="featured-news d-flex flex-column">
            <img className="featured-news-img" src={props.news.img} style={{width: "100%", height: "50%"}}></img>
            <div className="featured-news-header d-flex flex-row align-items-center mt-4">
                <a className="featured-news-link nav-link">
                    <h3 className="featured-news-title">{props.news.title}</h3>
                </a>
                <span className="mx-3">-</span>
                <h3 className="featured-news-author fst-italic fw-normal">{props.news.author}</h3>
            </div>
            <div className="featured-news-att row mt-3">
                <p className="featured-news-loc col-md-8 d-flex flex-grow-1 align-items-center mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>{props.news.location}
                </p>
                <p className="featured-news-date col-md-4 d-flex align-items-center mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3 me-2" viewBox="0 0 16 16">
                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>{date_begin} - {date_end}
                </p>
            </div>
        </div>
    )
}

function MiscNewsCard(props){
    var date_begin = String(props.news.date_begin).slice(4, 16);

    return(
        <div className="misc-news row mb-4" style={{height: "50%"}}>
            <div className="misc-news-left col-md-6 d-flex justify-content-center pe-0">
                <img className="misc-news-img" src={props.news.img}
                    style={{width: "75%", height: "200px"}}></img>
            </div>
            <div className="misc-news-right col-md-6 d-flex flex-column ps-0">
                <p className="misc-news-date d-flex align-items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                        height="16" fill="currentColor" className="bi bi-calendar3 me-2" viewBox="0 0 16 16">
                        <path
                            d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                        <path
                            d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>{date_begin}</p>
                <a className="misc-news-title nav-link">
                    <h4 className="fw-normal">{props.news.title}</h4>
                </a>
                <p className="misc-news-author fst-italic my-2">{props.news.author}</p>
                <p className="misc-news-desc mb-0">{props.news.desc}</p>
            </div>
        </div>
    )
}

export { FeaturedNewsCard, MiscNewsCard }