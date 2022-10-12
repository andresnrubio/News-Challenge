import React from 'react'
import NewsCard from '../../components/NewsCard/NewsCard'


const NewsContainer = (props) => {
  return (
    <div className='container'>
    {props.news.length > 0 ? props.news.map((data, index) => {
        if (index + 1 === props.news.length) {
            return (
                <div ref={props.lastItem} key={index}>
                    <NewsCard new={data} key={index} />
                </div>)
        } else {
            return <NewsCard new={data} key={index} />
        }
    }) : <></>}
</div>
  )
}

export default NewsContainer