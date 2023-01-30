export default function Gallery(){
    return(
    <div className="gallery-grid row px-5 pb-4">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src="https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg"
                className="w-100 shadow-1-strong rounded mb-4" alt="Campus Overview" style={{height: "260px"}}/>

            <img src="https://media.istockphoto.com/id/1002859060/photo/all-on-the-journey-of-a-better-future.jpg?s=612x612&w=0&k=20&c=ZwFbrJjPrkL9lmhDoGUCeWVc3ea5CnIQlcwNqaHKiJk="
                className="w-100 shadow-1-strong rounded mb-4" alt="Student On Stairs" style={{height: "570px"}}/>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="https://i.pinimg.com/originals/f8/77/43/f87743d3626403244840fb0df5da199c.jpg"
                className="w-100 shadow-1-strong rounded mb-4" alt="Library" style={{height: "570px"}}/>

            <img src="https://media.www.kent.ac.uk/se/30782/graduation-ceremony-3_2000w.jpg"
                className="w-100 shadow-1-strong rounded mb-4" alt="Graduation" style={{height: "260px"}}/>
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
            <img src="https://prod.media.cumberland.edu/wp-content/uploads/2022/01/DSC04285-2-1-scaled.jpg"
                className="w-100 shadow-1-strong rounded mb-4" alt="Students" style={{height: "260px"}}/>

            <img src="https://media.istockphoto.com/id/845912030/photo/attractive-girl-doing-dumbbell-exercises-in-gym.jpg?s=612x612&w=0&k=20&c=oOiUNzbfACUunrdJtaEX450Yj0trFflJp-DHuu0EUUg="
                className="w-100 shadow-1-strong rounded mb-4" alt="Excercise" style={{height: "570px"}}/>
        </div>
    </div>
    )
}