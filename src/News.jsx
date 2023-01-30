import './css/news.css'
import { FeaturedNewsCard, MiscNewsCard } from './NewsCard';
import { news } from './sampledata/news'

export default function News(){

    const changeDate = news.map(data => {
        return {...data, 
            date_begin: new Date(data.date_begin),
            date_end: new Date(data.date_end)}
    })

    // Sort data by date of the latest
    const sortedNews = changeDate.sort(
        (objA, objB) => Number(objB.date_begin) - Number(objA.date_begin),
    );

    // For featured news
    const data1 = sortedNews.slice(0, 1)

    // For misc news
    const data2 = sortedNews.slice(1, 3)

    const featuredNews = data1.map(data => {
        return(
            <FeaturedNewsCard 
                key = {data.id}
                news = {data}
            />
        )
    })

    const miscNews = data2.map(data => {
        return(
            <MiscNewsCard 
                key  = {data.id}
                news = {data}
            />
        )
    })

    return(
        <div className="news px-5 pt-5" style={{height: "fit-content"}}>
            <div className="news-outer-wrapper d-flex flex-column p-5">
                <h1 className="fw-normal">Latest News & Events</h1>
                <div className="news-inner-wrapper row my-4" style={{height: "fit-content"}}>
                    <div className="news-inner-left col-md-6" style={{height: "fit-content"}}>
                        {featuredNews}
                    </div>
                    <div className="news-inner-right col-md-6">
                        <div className="d-flex flex-column mb-4" style={{height: "fit-content"}}>
                            {miscNews}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}