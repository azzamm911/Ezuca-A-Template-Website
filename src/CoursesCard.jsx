export default function CoursesCard(props){

    var price;    
    var star = [...Array(5 - parseInt(props.newData.rating))].map((e, i) => 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star mx-1" viewBox="0 0 16 16" key={i}>
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg>);

    var starFill = [...Array(parseInt(props.newData.rating))].map((e, i) => 
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mx-1" viewBox="0 0 16 16" key={i}>
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>);

    if(props.newData.price.toLowerCase() === "free"){
        price = "free"
    }
    else {
        price = "$"+props.newData.price;
    }

    return(
        <div className='courses-card-wrapper col-md-4 p-3' style={{height: "420px"}}>
            <div className='courses-card card h-100'>
                <img src={props.newData.img} className="card-img-top" alt="..."
                    style={{height: "50%"}} />
                <div className="card-body d-flex flex-column mx-2" style={{height: "50%"}}>
                    <h5 className="card-title fw-normal">{props.newData.title}</h5>
                    <div className='card-body-top-wrapper d-flex flex-row mt-2 mb-3'>
                        <p className='card-author card-text fst-italic mb-0'>{props.newData.author}</p>
                        <span className='card-text mx-2'> / </span>
                        <p className='card-date card-text mb-0'>{props.newData.date}</p>
                    </div>
                    <div className='card-body-bottom-wrapper d-flex flex-row my-2'>
                        {price && <p className='card-price card-text d-flex flex-grow-1 text-uppercase fw-bold mb-0'>{price}</p>}
                        <p className='card-text d-flex align-items-center'>{star}{starFill}</p>
                    </div>
                </div>
            </div>
        </div>
        )
}